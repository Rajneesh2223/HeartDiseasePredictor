import React from 'react';
import { 
  TrendingUpIcon, 
  BarChartIcon, 
  CheckCircle2Icon, 
  AlertCircleIcon,
  ActivityIcon
} from 'lucide-react';

const ModelPerformance: React.FC = () => {
  const performanceMetrics = {
    accuracy: 0.85,
    precision: 0.86,
    recall: 0.84,
    f1_score: 0.85,
    roc_auc: 0.92,
  };

  // Color-coding function for performance levels
  const getMetricColor = (value: number) => {
    if (value > 0.9) return 'text-green-600';
    if (value > 0.8) return 'text-green-500';
    if (value > 0.7) return 'text-yellow-600';
    return 'text-red-500';
  };

  // Detailed metric descriptions
  const metricDescriptions = {
    accuracy: "Represents the overall correctness of predictions across all cases.",
    precision: "Measures the accuracy of positive predictions. High precision means fewer false positives.",
    recall: "Indicates the model's ability to find all positive instances. High recall means fewer missed positive cases.",
    f1_score: "Balances precision and recall, providing a single score that considers both metrics.",
    roc_auc: "Demonstrates the model's capability to distinguish between different classes."
  };

  return (
    <main className="max-w-5xl mx-auto p-4 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <div className="container mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4 text-blue-800 flex items-center justify-center gap-3">
            <BarChartIcon className="w-10 h-10 text-blue-600" />
            Model Performance
            <TrendingUpIcon className="w-10 h-10 text-blue-600" />
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive analysis of our Random Forest model's performance in predicting heart disease risk
          </p>
        </header>

        {/* Performance Metrics Grid */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* Metrics Section */}
          <div className="bg-white shadow-2xl rounded-2xl p-6 border-2 border-blue-100">
            <h2 className="text-2xl font-bold mb-6 text-blue-700 flex items-center gap-3">
              <CheckCircle2Icon className="text-blue-500" />
              Performance Metrics
            </h2>
            <div className="space-y-4">
              {Object.entries(performanceMetrics).map(([metric, value]) => (
                <div 
                  key={metric} 
                  className="bg-blue-50 rounded-lg p-4 flex items-center justify-between hover:bg-blue-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <ActivityIcon className="w-6 h-6 text-blue-600" />
                    <span className="font-semibold capitalize">{metric.replace('_', ' ')}:</span>
                  </div>
                  <span className={`font-bold text-lg ${getMetricColor(value)}`}>
                    {(value * 100).toFixed(2)}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Interpretation Section */}
          <div className="bg-white shadow-2xl rounded-2xl p-6 border-2 border-green-100">
            <h2 className="text-2xl font-bold mb-6 text-green-700 flex items-center gap-3">
              <AlertCircleIcon className="text-green-500" />
              Metric Insights
            </h2>
            <div className="space-y-4">
              {Object.entries(performanceMetrics).map(([metric, value]) => (
                <div 
                  key={metric} 
                  className="bg-green-50 rounded-lg p-4 hover:bg-green-100 transition-colors"
                >
                  <h3 className="font-semibold capitalize mb-2 text-green-800">
                    {metric.replace('_', ' ').toUpperCase()}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {metricDescriptions[metric as keyof typeof metricDescriptions]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
          <p className="text-yellow-800 italic">
            <strong>Important Note:</strong> While our model demonstrates strong predictive capabilities, 
            it should be used as a supportive tool alongside professional medical advice. 
            Individual health assessments require comprehensive evaluation by healthcare professionals.
          </p>
        </section>
      </div>
    </main>
  );
};

export default ModelPerformance;