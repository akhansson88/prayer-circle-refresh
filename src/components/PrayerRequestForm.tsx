import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Lock, Unlock, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export function PrayerRequestForm() {
  const [prayerRequest, setPrayerRequest] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (prayerRequest.trim()) {
      const { error } = await supabase
        .from('prayer_requests')
        .insert([
          {
            content: prayerRequest,
            author_name: "Anonymous",
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

  return (
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
  );
}