import { Link } from "react-router-dom";
import { Home, MessageCircle, User, LogOut } from "lucide-react";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

const Navbar = () => {
  const { session } = useSessionContext();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to sign out. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-4">
            <Link to="/" className="flex items-center px-2 py-2 text-gray-700 hover:text-indigo-600">
              <Home className="h-5 w-5 mr-1" />
              <span>Home</span>
            </Link>
            {session && (
              <Link to="/prayer-requests" className="flex items-center px-2 py-2 text-gray-700 hover:text-indigo-600">
                <MessageCircle className="h-5 w-5 mr-1" />
                <span>Prayer Requests</span>
              </Link>
            )}
          </div>
          <div className="flex items-center">
            {session ? (
              <Button
                onClick={handleLogout}
                variant="ghost"
                className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600"
              >
                <LogOut className="h-5 w-5" />
                <span>Sign Out</span>
              </Button>
            ) : (
              <div className="flex items-center px-2 py-2 text-gray-700">
                <User className="h-5 w-5 mr-1" />
                <span>Sign In</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;