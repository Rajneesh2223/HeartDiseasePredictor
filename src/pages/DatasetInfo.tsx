import React from 'react';

interface DatasetInfoType {
  num_samples: number;
  num_features: number;
  feature_names: string[];
  target_distribution: { [key: string]: number };
}

const DatasetInfo: React.FC = () => {
  const datasetInfo: DatasetInfoType = {
    num_samples: 303,
    num_features: 13,
    feature_names: [
      'age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg',
      'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal'
    ],
    target_distribution: { '0': 164, '1': 139 }
  };

  // Calculate percentage distribution
  const totalSamples = datasetInfo.num_samples;
  const noHeartDiseasePct = ((datasetInfo.target_distribution['0'] / totalSamples) * 100).toFixed(1);
  const heartDiseasePct = ((datasetInfo.target_distribution['1'] / totalSamples) * 100).toFixed(1);

  return (
    <div className="max-w-2xl mx-auto ">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-bold text-center">Dataset Information</h1>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-blue-800 mb-2">Dataset Overview</h2>
              <p className="text-gray-700">
                <span className="font-medium">Total Samples:</span> {datasetInfo.num_samples}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Number of Features:</span> {datasetInfo.num_features}
              </p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-green-800 mb-2">Target Distribution</h2>
              <div className="space-y-2">
                <div>
                  <span className="font-medium text-gray-700">No Heart Disease:</span>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                      <div 
                        className="bg-green-600 h-2.5 rounded-full" 
                        style={{width: `${noHeartDiseasePct}%`}}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">{datasetInfo.target_distribution['0']} ({noHeartDiseasePct}%)</span>
                  </div>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Heart Disease:</span>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                      <div 
                        className="bg-red-600 h-2.5 rounded-full" 
                        style={{width: `${heartDiseasePct}%`}}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">{datasetInfo.target_distribution['1']} ({heartDiseasePct}%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Feature List</h2>
            <div className="grid grid-cols-3 gap-2">
              {datasetInfo.feature_names.map((feature: string) => (
                <span 
                  key={feature} 
                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatasetInfo;