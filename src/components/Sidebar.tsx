import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Database, BarChart2, Activity, Book, ChevronsLeft, ChevronsRight } from 'lucide-react';

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Dataset Info', icon: Database, path: '/dataset-info' },
    { name: 'Model Performance', icon: BarChart2, path: '/model-performance' },
    { name: 'Prediction', icon: Activity, path: '/prediction' },
    { name: 'Insights', icon: Book, path: '/insights' },
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div 
      className={`
        bg-gradient-to-b from-blue-900 to-indigo-900 
        text-white 
        h-screen 
        fixed 
        left-0 
        top-0 
        z-50 
        transition-all 
        duration-300 
        ease-in-out 
        ${isCollapsed ? 'w-20' : 'w-64'} 
        shadow-2xl
        overflow-hidden
      `}
    >
      <div className="flex justify-end p-4">
        <button 
          onClick={toggleSidebar} 
          className="
            bg-blue-600 
            hover:bg-blue-700 
            rounded-full 
            p-2 
            transition 
            transform 
            hover:scale-110
          "
        >
          {isCollapsed ? <ChevronsRight className="h-5 w-5" /> : <ChevronsLeft className="h-5 w-5" />}
        </button>
      </div>
      
      <div className="flex items-center justify-center py-6 border-b border-blue-700">
        {!isCollapsed && (
          <h1 className="text-2xl font-semibold text-center text-white">Heart Health</h1>
        )}
      </div>
      
      <nav className="mt-10 space-y-2 px-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`
              flex 
              items-center 
              space-x-2 
              py-3 
              px-4 
              rounded-lg 
              transition 
              duration-300 
              group
              relative
              overflow-hidden
              ${
                location.pathname === item.path 
                  ? 'bg-blue-600 text-white' 
                  : 'text-blue-200 hover:bg-blue-800 hover:text-white'
              }
              ${isCollapsed ? 'justify-center' : ''}
            `}
          >
            <div className="flex items-center justify-center w-8">
              <item.icon 
                className={`
                  h-6 w-6 
                  transition-colors 
                  duration-300
                  ${location.pathname === item.path 
                    ? 'text-white' 
                    : 'text-blue-300 group-hover:text-white'
                  }
                `}
              />
            </div>
            
            {!isCollapsed && (
              <span className="text-sm font-medium">
                {item.name}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;