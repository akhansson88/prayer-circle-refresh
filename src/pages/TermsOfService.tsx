import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto space-y-8 py-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Terms of Service
          </h1>
          <p className="text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>1. Acceptance of Terms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              By accessing and using Refresh Europe, you agree to be bound by these Terms of Service
              and all applicable laws and regulations. If you do not agree with any of these terms,
              you are prohibited from using or accessing this site.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>2. Use of Service</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              Our service is intended for spiritual encouragement and prayer support.
              Users agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Submit prayer requests respectfully and in good faith</li>
              <li>Maintain the confidentiality of private prayer requests</li>
              <li>Refrain from using the service for any unlawful purpose</li>
              <li>Respect other users and their religious beliefs</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>3. Content Guidelines</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              Users are responsible for all content they submit. Content must not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Contain harmful or malicious content</li>
              <li>Infringe on intellectual property rights</li>
              <li>Include personal attacks or hate speech</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>4. Modifications</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              We reserve the right to modify these terms at any time. Continued use of the
              service after changes constitutes acceptance of the modified terms.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              For questions about these Terms of Service, please contact us at:
              terms@refresheurope.org
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;