import { Link } from "react-router-dom";
import { Info, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
              <Info className="h-5 w-5 mr-2" />
              About Us
            </h3>
            <p className="text-sm">
              Refresh Europe is dedicated to spiritual renewal across the continent through
              prayer, community engagement, and fostering meaningful connections between believers.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              Contact
            </h3>
            <p className="text-sm">
              Email: contact@refresheurope.org<br />
              Phone: +1 234 567 890
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Location
            </h3>
            <p className="text-sm">
              Hauptstraße 123<br />
              10115 Berlin, Germany<br />
              <br />
              Drottninggatan 45<br />
              111 51 Stockholm, Sweden
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Refresh Europe. All rights reserved.</p>
          <div className="space-x-4 mt-2">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-gray-200 text-sm inline-block">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-gray-200 text-sm inline-block">
              Terms of Service
            </Link>
            <Link to="/gdpr-deletion" className="text-gray-400 hover:text-gray-200 text-sm inline-block">
              GDPR Data Deletion
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;