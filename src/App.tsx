import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { supabase } from "@/integrations/supabase/client";
import Index from "./pages/Index";
import PrayerRequests from "./pages/PrayerRequests";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import GDPRDeletion from "./pages/GDPRDeletion";
import EmailConfirmation from "./pages/EmailConfirmation";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AuthWrapper from "./components/AuthWrapper";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SessionContextProvider supabaseClient={supabase}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Header />
            <Navbar />
            <main className="flex-grow">
              <AuthWrapper>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/prayer-requests" element={<PrayerRequests />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-of-service" element={<TermsOfService />} />
                  <Route path="/gdpr-deletion" element={<GDPRDeletion />} />
                  <Route path="/email-confirmation" element={<EmailConfirmation />} />
                </Routes>
              </AuthWrapper>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </SessionContextProvider>
  </QueryClientProvider>
);

export default App;