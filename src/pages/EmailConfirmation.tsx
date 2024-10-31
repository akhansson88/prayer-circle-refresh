import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EmailConfirmation = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        const token = searchParams.get("token");
        const type = searchParams.get("type");

        if (token && type === "signup") {
          const { error } = await supabase.auth.verifyOtp({
            token_hash: token,
            type: "signup",
          });

          if (error) throw error;

          toast({
            title: "Success",
            description: "Your email has been verified. You can now sign in.",
          });
        }
      } catch (error: any) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      } finally {
        setIsVerifying(false);
        navigate("/");
      }
    };

    confirmEmail();
  }, [searchParams, navigate, toast]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 p-6">
      <div className="max-w-md mx-auto pt-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Email Verification</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            {isVerifying ? (
              <p>Verifying your email...</p>
            ) : (
              <p>Redirecting to home page...</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmailConfirmation;