import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { MessageSquare, Heart, Share2, Lock, Unlock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface PrayerRequest {
  id: number;
  author_name: string;
  content: string;
  created_at: string;
  prayers_count: number;
  is_private: boolean;
}

export function PrayerRequestList() {
  const [prayerRequests, setPrayerRequests] = useState<PrayerRequest[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    fetchPrayerRequests();
    const subscription = supabase
      .channel('prayer_requests_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'prayer_requests'
        },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setPrayerRequests(prev => [payload.new as PrayerRequest, ...prev]);
          } else if (payload.eventType === 'UPDATE') {
            setPrayerRequests(prev => 
              prev.map(request => 
                request.id === payload.new.id ? payload.new as PrayerRequest : request
              )
            );
          } else if (payload.eventType === 'DELETE') {
            setPrayerRequests(prev => 
              prev.filter(request => request.id !== payload.old.id)
            );
          }
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const fetchPrayerRequests = async () => {
    const { data, error } = await supabase
      .from('prayer_requests')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Error fetching prayer requests",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    setPrayerRequests(data);
  };

  const togglePrivacy = async (requestId: number, currentPrivacy: boolean) => {
    const { error } = await supabase
      .from('prayer_requests')
      .update({ is_private: !currentPrivacy })
      .eq('id', requestId);

    if (error) {
      toast({
        title: "Error updating privacy",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-indigo-600 px-2">
        <MessageSquare className="w-5 h-5" />
        <h2 className="font-semibold">Recent Prayer Requests</h2>
      </div>

      {prayerRequests.map((request) => (
        <Card key={request.id} className="p-6 space-y-4 hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
          <div className="flex justify-between items-start">
            <div className="flex gap-3">
              <Avatar>
                <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-medium">
                  {request.author_name[0]}
                </div>
              </Avatar>
              <div>
                <h3 className="font-semibold text-gray-900">{request.author_name}</h3>
                <p className="text-sm text-gray-500">{formatDate(request.created_at)}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="flex items-center gap-1 text-sm text-gray-500">
                <Heart className="w-4 h-4 text-rose-500" /> {request.prayers_count}
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-500">
                <Share2 className="w-4 h-4 text-indigo-500" />
              </span>
            </div>
          </div>
          <p className="text-gray-700">{request.content}</p>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" className="hover:bg-indigo-50 hover:text-indigo-600">
              Pray for this
            </Button>
            <Button variant="outline" size="sm" className="hover:bg-indigo-50 hover:text-indigo-600">
              Show Comments
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => togglePrivacy(request.id, request.is_private)}
              className="ml-auto hover:bg-indigo-50"
            >
              {request.is_private ? (
                <>
                  <Lock className="w-4 h-4 mr-2" />
                  Private
                </>
              ) : (
                <>
                  <Unlock className="w-4 h-4 mr-2" />
                  Public
                </>
              )}
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}