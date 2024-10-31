import { useSessionContext } from "@supabase/auth-helpers-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import LoginButton from "@/components/LoginButton";
import { ArrowRight, Heart, Users, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import DonateSection from "@/components/DonateSection";

const Index = () => {
  const { session } = useSessionContext();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1473177104440-ffee2f376098')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.5)"
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-6 max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Uniting Europe Through Prayer</h1>
            <p className="text-xl mb-8">
              Join a community dedicated to spiritual renewal across Europe through
              prayer, fellowship, and ministry.
            </p>
            {session ? (
              <Link to="/prayer-requests">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                  View Prayer Requests <ArrowRight className="ml-2" />
                </Button>
              </Link>
            ) : (
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700"
                onClick={() => document.getElementById("login-section")?.scrollIntoView({ behavior: "smooth" })}
              >
                Join Our Community <ArrowRight className="ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gradient-to-b from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="rounded-full bg-indigo-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">United in Prayer</h3>
                <p className="text-gray-600">
                  Connect with believers across Europe and share your prayer requests
                  in a supportive community.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="rounded-full bg-indigo-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Growing Fellowship</h3>
                <p className="text-gray-600">
                  Build meaningful connections with other believers and support each
                  other in your spiritual journey.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="rounded-full bg-indigo-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">European Revival</h3>
                <p className="text-gray-600">
                  Be part of a movement bringing spiritual renewal across the
                  European continent.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Donate Section */}
      <DonateSection />

      {/* Login Section */}
      {!session && (
        <div id="login-section" className="py-24 bg-white">
          <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Join Our Community</h2>
            <LoginButton />
          </div>
        </div>
      )}

      {/* Mission Section */}
      <div 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517022812141-23620dba5c23')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.7)"
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl">
            "Like a shepherd leading his flock, we believe in guiding and supporting
            each other through prayer and fellowship. Together, we can bring about
            spiritual renewal across Europe, one prayer at a time."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
