import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Facebook } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const LoginButton = () => {
  const { toast } = useToast();

  const handleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'facebook',
        options: {
          redirectTo: `${window.location.origin}/`,
        },
      });
      
      if (error) throw error;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to sign in with Facebook. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Button
      onClick={handleLogin}
      className="flex items-center space-x-2 bg-[#1877F2] hover:bg-[#0C63D4]"
    >
      <Facebook className="h-5 w-5" />
      <span>Continue with Facebook</span>
    </Button>
  );
};

export default LoginButton;