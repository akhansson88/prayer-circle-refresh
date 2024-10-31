import { Link } from "react-router-dom";
import { Home, MessageCircle, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center px-2 py-2 text-gray-700 hover:text-indigo-600">
              <Home className="h-5 w-5 mr-1" />
              <span>Home</span>
            </Link>
            <Link to="/prayer-requests" className="flex items-center px-2 py-2 text-gray-700 hover:text-indigo-600">
              <MessageCircle className="h-5 w-5 mr-1" />
              <span>Prayer Requests</span>
            </Link>
          </div>
          <div className="flex items-center">
            <button className="flex items-center px-2 py-2 text-gray-700 hover:text-indigo-600">
              <User className="h-5 w-5 mr-1" />
              <span>Sign In</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;