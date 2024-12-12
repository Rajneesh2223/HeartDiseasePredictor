import React, { useState } from 'react';
import { Heart, Activity, Zap, CloudLightning } from 'lucide-react';

const Prediction: React.FC = () => {
  const [formData, setFormData] = useState({
    age: 50,
    sex: '',
    cp: '',
    trestbps: 120,
    chol: 200,
    fbs: '',
    restecg: '',
    thalach: 150,
    exang: '',
    oldpeak: 0,
    slope: '',
    ca: '',
    thal: '',
  });

  const [prediction, setPrediction] = useState<number | null>(null);

  const handleChange = (name: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate prediction (random number between 0 and 1)
    setPrediction(Math.random());
  };

  const renderInputField = (
    label: string, 
    name: string, 
    type: 'text' | 'number' | 'select' = 'text', 
    options?: string[]
  ) => {
    return (
      <div className="mb-4">
        <label htmlFor={name} className="block text-gray-700 font-semibold mb-2">
          {label}
        </label>
        {type === 'select' ? (
          <select
            id={name}
            value={formData[name as keyof typeof formData] as string}
            onChange={(e) => handleChange(name, e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select {label}</option>
            {options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            id={name}
            value={formData[name as keyof typeof formData]}
            onChange={(e) => handleChange(name, type === 'number' ? +e.target.value : e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
        <div className="px-8 py-10">
          <div className="flex items-center mb-8">
            <Heart className="w-12 h-12 text-red-500 mr-4" />
            <h1 className="text-4xl font-extrabold text-gray-800">Heart Disease Prediction</h1>
          </div>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <div>
              {renderInputField('Age', 'age', 'number')}
              
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Sex</label>
                <div className="flex space-x-4">
                  {['Male', 'Female'].map((sex) => (
                    <label key={sex} className="inline-flex items-center">
                      <input
                        type="radio"
                        value={sex.toLowerCase()}
                        checked={formData.sex === sex.toLowerCase()}
                        onChange={(e) => handleChange('sex', e.target.value)}
                        className="form-radio text-blue-600"
                      />
                      <span className="ml-2">{sex}</span>
                    </label>
                  ))}
                </div>
              </div>

              {renderInputField('Chest Pain Type', 'cp', 'select', ['Typical Angina', 'Atypical Angina', 'Non-Anginal Pain', 'Asymptomatic'])}
              
              {renderInputField('Resting Blood Pressure', 'trestbps', 'number')}
              
              {renderInputField('Cholesterol', 'chol', 'number')}
            </div>

            <div>
              {renderInputField('Fasting Blood Sugar', 'fbs', 'select', ['> 120 mg/dl', '< 120 mg/dl'])}
              
              {renderInputField('Resting ECG', 'restecg', 'select', ['Normal', 'ST-T Wave Abnormality', 'Left Ventricular Hypertrophy'])}
              
              {renderInputField('Max Heart Rate', 'thalach', 'number')}
              
              {renderInputField('Exercise Induced Angina', 'exang', 'select', ['Yes', 'No'])}
              
              {renderInputField('ST Depression', 'oldpeak', 'number')}
              
              {renderInputField('Slope of Peak Exercise ST Segment', 'slope', 'select', ['Upsloping', 'Flat', 'Downsloping'])}
              
              {renderInputField('Number of Major Vessels', 'ca', 'select', ['0', '1', '2', '3'])}
              
              {renderInputField('Thalassemia', 'thal', 'select', ['Normal', 'Fixed Defect', 'Reversible Defect'])}
            </div>

            <div className="md:col-span-2">
              <button 
                type="submit" 
                className="w-full flex items-center justify-center bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300"
              >
                <Zap className="mr-2" />
                Predict Heart Disease Risk
              </button>
            </div>
          </form>

          {prediction !== null && (
            <div className="mt-8 bg-gray-50 rounded-lg p-6 shadow-inner">
              <div className="flex items-center mb-4">
                <Activity className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Prediction Result</h2>
              </div>
              
              <div className="mb-4 w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-blue-600 h-3 rounded-full transition-all duration-500" 
                  style={{ width: `${prediction * 100}%` }}
                ></div>
              </div>
              
              <p className="text-lg mb-4">
                Based on the input values, there is a <strong>{(prediction * 100).toFixed(2)}%</strong> chance of heart disease.
              </p>
              
              <div className="flex items-start p-4 bg-white rounded-lg shadow-md">
                <CloudLightning className="w-8 h-8 text-yellow-500 mr-4 flex-shrink-0" />
                <p className="text-gray-600">
                  {prediction > 0.5 ? (
                    <span>This indicates a higher risk of heart disease. Please consult with a healthcare professional for a thorough evaluation.</span>
                  ) : (
                    <span>This indicates a lower risk of heart disease. However, it's always good to maintain a healthy lifestyle and consult with a healthcare professional regularly.</span>
                  )}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Prediction;