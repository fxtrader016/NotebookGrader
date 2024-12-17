import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { NotebookRating } from './components/NotebookRating';
import { TotalScore } from './components/TotalScore';
import { ConfigButton } from './components/ConfigButton';
import { ConfigModal } from './components/ConfigModal';
import { initialCriteria } from './config/gradingConfig';
import { GradingCriteria } from './types/grading';
import { roundToQuarter } from './utils/calculations';

function App() {
  const [criteria, setCriteria] = useState<GradingCriteria[]>(initialCriteria);
  const [totalScore, setTotalScore] = useState(0);
  const [isConfigOpen, setIsConfigOpen] = useState(false);

  useEffect(() => {
    const rawTotal = criteria.reduce((sum, item) => sum + item.value, 0);
    // Only round the total score to nearest 0.25
    setTotalScore(roundToQuarter(rawTotal));
  }, [criteria]);

  const handleRatingChange = (index: number, value: number) => {
    const newCriteria = [...criteria];
    newCriteria[index].value = value;
    setCriteria(newCriteria);
  };

  const handleReset = () => {
    setCriteria(criteria.map(item => ({ ...item, value: 0 })));
  };

  const handleConfigSave = (newCriteria: GradingCriteria[]) => {
    // Reset values when max points change
    setCriteria(newCriteria.map(item => ({ ...item, value: 0 })));
  };

  const maxScore = criteria.reduce((sum, item) => sum + item.maxPoints, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <div className="max-w-md mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 relative">
          <ConfigButton onClick={() => setIsConfigOpen(true)} />
          <Header />
          <div className="space-y-6">
            {criteria.map((item, index) => (
              <NotebookRating
                key={item.label}
                criteria={item}
                onChange={(value) => handleRatingChange(index, value)}
              />
            ))}
          </div>
        </div>
        <TotalScore 
          score={totalScore} 
          maxScore={maxScore}
          onReset={handleReset}
        />
        <ConfigModal
          isOpen={isConfigOpen}
          onClose={() => setIsConfigOpen(false)}
          criteria={criteria}
          onSave={handleConfigSave}
        />
      </div>
    </div>
  );
}

export default App;