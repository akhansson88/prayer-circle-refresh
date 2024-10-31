import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const GDPRDeletion = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto space-y-8 py-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            GDPR Data Deletion Request
          </h1>
          <p className="text-gray-600">
            Your right to data erasure under GDPR Article 17
          </p>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>How to Request Data Deletion</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              Under the General Data Protection Regulation (GDPR), you have the right to request
              the deletion of your personal data. To submit a deletion request:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-gray-600 ml-4">
              <li>Send an email to privacy@refresheurope.org with the subject "GDPR Data Deletion Request"</li>
              <li>Include your full name and email address associated with your account</li>
              <li>Specify whether you want to delete:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Your entire account and all associated data</li>
                  <li>Specific prayer requests or interactions</li>
                  <li>Specific personal information</li>
                </ul>
              </li>
            </ol>
            <div className="mt-6">
              <a href="mailto:privacy@refresheurope.org?subject=GDPR%20Data%20Deletion%20Request">
                <Button className="w-full sm:w-auto flex items-center justify-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>Send Deletion Request Email</span>
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>What Happens Next</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              After receiving your request:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>We will confirm receipt of your request within 48 hours</li>
              <li>Your request will be processed within 30 days</li>
              <li>You will receive confirmation once your data has been deleted</li>
              <li>If we need additional information, we will contact you</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Data Retention</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Some data may be retained for legal compliance, fraud prevention, or technical
              limitations. We will inform you if this applies to your deletion request.
              Any retained data will be minimal and securely stored in accordance with GDPR
              requirements.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GDPRDeletion;