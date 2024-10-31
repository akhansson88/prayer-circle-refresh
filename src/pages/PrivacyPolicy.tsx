import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto space-y-8 py-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Privacy Policy
          </h1>
          <p className="text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Information We Collect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              We collect information that you provide directly to us when you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Create an account</li>
              <li>Submit prayer requests</li>
              <li>Interact with other users&apos; prayer requests</li>
              <li>Contact us for support</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Provide and maintain our prayer request service</li>
              <li>Notify you about responses to your prayer requests</li>
              <li>Improve and optimize our platform</li>
              <li>Protect against misuse or abuse</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Data Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              We implement appropriate security measures to protect your personal information.
              Your prayer requests and account data are stored securely in our database,
              and we use industry-standard encryption to protect data transmission.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at:
              privacy@refresheurope.org
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;