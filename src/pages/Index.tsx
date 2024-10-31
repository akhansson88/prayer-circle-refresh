import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import { useState } from "react";
import { MessageSquare, Heart, Eye, Share2, Lock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [prayerRequest, setPrayerRequest] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prayerRequest.trim()) {
      toast({
        title: "Prayer request submitted",
        description: "Your prayer request has been shared with our prayer team.",
      });
      setPrayerRequest("");
    }
  };

  const prayerRequests = [
    {
      id: 1,
      author: "Alexander Hansson",
      avatar: "/avatar.jpg",
      content: "Pray for the leaders of the European nations.",
      date: "Oct 24, 2024, 3:21 PM",
      prayers: 2,
      views: 5,
    },
    {
      id: 2,
      author: "Alexander Hansson",
      avatar: "/avatar.jpg",
      content: "Please pray for the development of this website.",
      date: "Oct 24, 2024, 5:07 PM",
      prayers: 0,
      views: 3,
    },
    {
      id: 3,
      author: "Alexander Hansson",
      avatar: "/avatar.jpg",
      content: "Is this seen",
      date: "Oct 24, 2024, 12:36 AM",
      prayers: 1,
      views: 4,
    },
    {
      id: 4,
      author: "Robert Deniro",
      avatar: "/avatar.jpg",
      content: "Testing.",
      date: "Oct 26, 2024, 11:37 PM",
      prayers: 0,
      views: 2,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FF] p-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-blue-600">Prayer Requests</h1>
          <p className="text-gray-600">
            Share your prayer requests with our community. We believe in the power of prayer
            and are here to support you.
          </p>
        </div>

        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-600">
                <MessageSquare className="w-5 h-5" />
                <h2 className="font-semibold">Submit a Prayer Request</h2>
              </div>
              <p className="text-sm text-gray-500">Your request will be shared with our prayer team</p>
            </div>
            
            <Textarea
              placeholder="Share your prayer request..."
              value={prayerRequest}
              onChange={(e) => setPrayerRequest(e.target.value)}
              className="min-h-[100px]"
            />
            
            <div className="flex justify-between items-center">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="text-gray-600"
                onClick={() => setIsPrivate(!isPrivate)}
              >
                <Lock className="w-4 h-4 mr-2" />
                Private
              </Button>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                Submit Prayer Request
              </Button>
            </div>
          </form>
        </Card>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-blue-600">
            <MessageSquare className="w-5 h-5" />
            <h2 className="font-semibold">Recent Prayer Requests</h2>
          </div>

          {prayerRequests.map((request) => (
            <Card key={request.id} className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  <Avatar>
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      {request.author[0]}
                    </div>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{request.author}</h3>
                    <p className="text-sm text-gray-500">{request.date}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="flex items-center gap-1 text-sm text-gray-500">
                    <Heart className="w-4 h-4" /> {request.prayers}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-gray-500">
                    <Eye className="w-4 h-4" /> {request.views}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-gray-500">
                    <Share2 className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <p className="text-gray-700">{request.content}</p>
              <div className="flex gap-3">
                <Button variant="outline" size="sm">
                  Pray for this
                </Button>
                <Button variant="outline" size="sm">
                  Show Comments
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