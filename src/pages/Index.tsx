import { PrayerRequestForm } from "@/components/PrayerRequestForm";
import { PrayerRequestList } from "@/components/PrayerRequestList";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 p-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-4 py-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Prayer Requests
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Share your prayer requests with our community. We believe in the power of prayer
            and are here to support you on your spiritual journey.
          </p>
        </div>

        <PrayerRequestForm />
        <PrayerRequestList />
      </div>
    </div>
  );
};

export default Index;