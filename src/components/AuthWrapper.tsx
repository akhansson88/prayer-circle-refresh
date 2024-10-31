import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSessionContext } from "@supabase/auth-helpers-react";

interface AuthWrapperProps {
  children: React.ReactNode;
}

const AuthWrapper = ({ children }: AuthWrapperProps) => {
  const { session, isLoading } = useSessionContext();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Allow index page (/) to be visible without login
    if (!isLoading && !session && location.pathname !== "/") {
      navigate("/");
    }
  }, [session, isLoading, navigate, location.pathname]);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  // If not on index page and not authenticated, don't render children
  if (!session && location.pathname !== "/") {
    return null;
  }

  return <>{children}</>;
};

export default AuthWrapper;