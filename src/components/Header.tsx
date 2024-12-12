import React from 'react';
import { Bell, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-between">
          <div className="absolute left-6">
            <button className="flex text-gray-600 focus:outline-none">
              <Bell className="h-6 w-6" />
            </button>
          </div>
          
          <div className="flex-1 flex justify-center">
            <span className="text-xl font-semibold text-gray-800">HeartSentry AI</span>
          </div>
          
          <div className="absolute right-6">
            <button className="flex text-gray-600 focus:outline-none">
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;