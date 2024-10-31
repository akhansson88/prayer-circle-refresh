import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import { useState, useEffect } from "react";
import { MessageSquare, Heart, Share2, Lock, Unlock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface PrayerRequest {
  id: number;
  author_name: string;
  content: string;
  created_at: string;
  prayers_count: number;
  is_private: boolean;
}

const Index = () => {
  const [prayerRequest, setPrayerRequest] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const { toast } = useToast();
  const [prayerRequests, setPrayerRequests] = useState<PrayerRequest[]>([]);

  useEffect(() => {
    // Initial fetch of prayer requests
    fetchPrayerRequests();

    // Set up real-time subscription
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (prayerRequest.trim()) {
      const { error } = await supabase
        .from('prayer_requests')
        .insert([
          {
            content: prayerRequest,
            author_name: "Anonymous", // You can update this when auth is implemented
            is_private: isPrivate,
          }
        ]);

      if (error) {
        toast({
          title: "Error submitting prayer request",
          description: error.message,
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Prayer request submitted",
        description: "Your prayer request has been shared with our prayer team.",
      });
      setPrayerRequest("");
    }
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 p-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-4 py-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Prayer Requests
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Share your prayer requests with our community. We believe in the power of prayer
            and are here to support you on your spiritual journey.
          </p>
        </div>

        <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-indigo-600">
                <MessageSquare className="w-5 h-5" />
                <h2 className="font-semibold">Submit a Prayer Request</h2>
              </div>
              <p className="text-sm text-gray-500">Your request will be shared with our prayer team</p>
            </div>
            
            <Textarea
              placeholder="Share your prayer request..."
              value={prayerRequest}
              onChange={(e) => setPrayerRequest(e.target.value)}
              className="min-h-[100px] focus:ring-2 focus:ring-indigo-500"
            />
            
            <div className="flex justify-between items-center">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="text-gray-600 hover:bg-indigo-50"
                onClick={() => setIsPrivate(!isPrivate)}
              >
                {isPrivate ? (
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
              <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700">
                Submit Prayer Request
              </Button>
            </div>
          </form>
        </Card>

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
      </div>
    </div>
  );
};

export default Index;