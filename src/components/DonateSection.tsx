import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";

const DonateSection = () => {
  const handleDonateClick = () => {
    // Replace this URL with your actual PayPal donation link
    window.open('https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID', '_blank');
  };

  return (
    <div className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2 text-3xl">
              <Heart className="h-8 w-8 text-red-500" />
              Support Our Mission
            </CardTitle>
            <CardDescription className="text-lg">
              Your generous donation helps us spread hope and unity across Europe
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              Every contribution makes a difference in our mission to unite Europe through prayer and spiritual renewal.
            </p>
            <Button 
              onClick={handleDonateClick}
              size="lg" 
              className="bg-[#0070ba] hover:bg-[#003087] text-white font-semibold"
            >
              Donate with PayPal
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DonateSection;