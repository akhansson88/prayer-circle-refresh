import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import LoginButton from "@/components/LoginButton";
import { useSessionContext } from "@supabase/auth-helpers-react";

const Index = () => {
  const { session } = useSessionContext();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto space-y-12 py-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Refresh Europe
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering Christian communities across Europe through prayer, fellowship, and ministry
          </p>
        </div>

        {!session ? (
          <Card className="max-w-md mx-auto bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle>Welcome to Refresh Europe</CardTitle>
              <CardDescription>Sign in to join our prayer community</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <LoginButton />
            </CardContent>
          </Card>
        ) : (
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
              <CardDescription>Bringing spiritual renewal to Europe</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We are dedicated to refreshing the spiritual landscape of Europe through
                prayer, community engagement, and fostering meaningful connections between
                believers across the continent.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Prayer Network</CardTitle>
              <CardDescription>Join our community in prayer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Connect with believers across Europe through our prayer network.
                Share your prayer requests and join others in intercession.
              </p>
              <Link to="/prayer-requests">
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                  View Prayer Requests
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Build meaningful connections with other believers across Europe
                through our network of local communities.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Access spiritual resources, teaching materials, and guidance
                for personal and community growth.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Events</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Participate in conferences, workshops, and gatherings designed
                to strengthen your faith and build community.
              </p>
            </CardContent>
          </Card>
        </div>
        )}
      </div>
    </div>
  );
};

export default Index;
