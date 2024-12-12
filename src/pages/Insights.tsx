import React from 'react';
import { 
  HeartIcon, 
  ActivityIcon, 
  ClockIcon, 
  StethoscopeIcon, 
  ShieldIcon, 
  UserIcon,
  CheckCircle2Icon
} from 'lucide-react';

const Insights: React.FC = () => {
  const riskFactors = [
    { icon: ClockIcon, text: "Age: Risk increases with age, especially after 55 for women and 45 for men." },
    { icon: UserIcon, text: "Gender: Men are generally at greater risk than women, especially at younger ages." },
    { icon: StethoscopeIcon, text: "High blood pressure: Increases strain on the heart and blood vessels." },
    
  ];

  const preventiveMeasures = [
    { icon: CheckCircle2Icon, text: "Maintain a healthy diet rich in fruits, vegetables, whole grains, and lean proteins." },
    { icon: ActivityIcon, text: "Exercise regularly, aiming for at least 150 minutes of moderate-intensity activity per week." },
    { icon: ShieldIcon, text: "Get regular health check-ups and monitor your blood pressure, cholesterol, and blood sugar levels." },
    { icon: HeartIcon, text: "Manage stress through relaxation techniques, meditation, or yoga." },
  ];

  return (
    <main className="max-w-4xl mx-auto p-4  min-h-screen animate-fade-in">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-800 flex items-center justify-center gap-3">
        <HeartIcon className="text-red-500 w-12 h-12 animate-pulse" />
        Insights & Recommendations
        <HeartIcon className="text-red-500 w-12 h-12 animate-pulse" />
      </h1>

      <section className="bg-white shadow-2xl rounded-2xl px-8 pt-6 pb-8 mb-4 border-2 border-blue-100 transition-all duration-300 hover:shadow-xl">
        <article className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-700 flex items-center gap-3">
            <StethoscopeIcon className="text-blue-500" />
            Key Factors Contributing to Heart Disease
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {riskFactors.map((factor, index) => (
              <li 
                key={index}
                className="bg-blue-50 p-4 rounded-lg shadow-sm flex items-center gap-4 hover:bg-blue-100 transition-colors duration-300 transform hover:scale-105"
              >
                <factor.icon className="w-8 h-8 text-blue-600" />
                <span className="text-gray-700">{factor.text}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-green-700 flex items-center gap-3">
            <ShieldIcon className="text-green-500" />
            Preventive Measures
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {preventiveMeasures.map((measure, index) => (
              <li 
                key={index}
                className="bg-green-50 p-4 rounded-lg shadow-sm flex items-center gap-4 hover:bg-green-100 transition-colors duration-300 transform hover:scale-105"
              >
                <measure.icon className="w-8 h-8 text-green-600" />
                <span className="text-gray-700">{measure.text}</span>
              </li>
            ))}
          </ul>
        </article>

        <p className="text-lg text-center text-gray-600 italic bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
          Remember, while our prediction model can provide insights into your heart disease risk, it's not a substitute
          for professional medical advice. Always consult with a healthcare provider for personalized recommendations
          and thorough evaluations.
        </p>
      </section>
    </main>
  );
};

export default Insights;