import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import DatasetInfo from './pages/DatasetInfo';
import ModelPerformance from './pages/ModelPerformance';
import Prediction from './pages/Prediction';
import Insights from './pages/Insights';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen p-6">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dataset-info" element={<DatasetInfo />} />
                <Route path="/model-performance" element={<ModelPerformance />} />
                <Route path="/prediction" element={<Prediction />} />
                <Route path="/insights" element={<Insights />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
