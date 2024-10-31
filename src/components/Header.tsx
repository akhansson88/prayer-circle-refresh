import { Church, Heart, Megaphone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Church className="h-8 w-8" />
            <span className="text-2xl font-bold">Refresh Europe</span>
          </div>
          <div className="hidden sm:flex space-x-6">
            <div className="flex items-center">
              <Heart className="h-5 w-5 mr-2" />
              <span>Unite in Prayer</span>
            </div>
            <div className="flex items-center">
              <Megaphone className="h-5 w-5 mr-2" />
              <span>Spread Hope</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;