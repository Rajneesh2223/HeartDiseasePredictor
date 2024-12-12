import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Activity, Clipboard, ChevronDown } from 'lucide-react';

const Home: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features = [
    { 
      icon: Heart, 
      title: 'Predict Heart Disease', 
      description: 'Advanced AI-powered risk assessment using machine learning algorithms.',
      link: '/prediction',
      color: 'bg-purple-50',
      iconColor: 'text-purple-600',
      hoverColor: 'hover:bg-purple-100',
      borderColor: 'border-purple-200'
    },
    { 
      icon: Activity, 
      title: 'Model Performance', 
      description: 'Transparent insights into our predictive model\'s accuracy and reliability.',
      link: '/model-performance',
      color: 'bg-teal-50',
      iconColor: 'text-teal-600',
      hoverColor: 'hover:bg-teal-100',
      borderColor: 'border-teal-200'
    },
    { 
      icon: Clipboard, 
      title: 'Health Insights', 
      description: 'Comprehensive analysis of heart disease risk factors and prevention strategies.',
      link: '/insights',
      color: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
      hoverColor: 'hover:bg-indigo-100',
      borderColor: 'border-indigo-200'
    },
  ];

  return (
    <div 
      className="relative min-h-screen  text-white"
    >
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-white animate-pulse">
            HeartSentry AI
          </h1>
          <p className="text-2xl font-medium text-gray-400 max-w-3xl mx-auto mb-8">
            Your Personal Heart Health Guardian: Predict, Prevent, Protect
          </p>
          
          <div className="flex justify-center space-x-4 mb-16">
            <Link 
              to="/prediction" 
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition transform hover:scale-105 flex items-center"
            >
              Start Risk Assessment <ArrowRight className="ml-2" />
            </Link>
            <Link 
              to="/about" 
              className="border-2 border-black text-black hover:bg-white hover:text-blue-900 font-bold py-3 px-6 rounded-full transition transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`
                ${feature.color} ${feature.hoverColor} ${feature.borderColor}
                p-6 rounded-xl shadow-lg transition duration-300 
                transform hover:-translate-y-2 cursor-pointer
                border border-opacity-30 relative overflow-hidden
              `}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <div className="relative z-10">
                <feature.icon className={`h-12 w-12 ${feature.iconColor} mb-4`} />
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h2>
                <p className="text-gray-700 mb-4">{feature.description}</p>
                <Link to={feature.link} className={`${feature.iconColor} hover:text-opacity-80 flex items-center`}>
                  Explore <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              {activeFeature === index && (
                <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-sm z-0"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <ChevronDown className="mx-auto text-white animate-bounce h-10 w-10" />
          <p className="text-gray-300 mt-4">Scroll to explore more</p>
        </div>
      </div>
    </div>
  );
};

export default Home;