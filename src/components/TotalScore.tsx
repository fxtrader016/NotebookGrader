import React from 'react';
import { ResetButton } from './ResetButton';

interface TotalScoreProps {
  score: number;
  maxScore: number;
  onReset: () => void;
}

export function TotalScore({ score, maxScore, onReset }: TotalScoreProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-indigo-900">Total Score</h2>
        <div className="text-2xl font-bold text-indigo-600">
          {score.toFixed(2)}/{maxScore}
        </div>
      </div>
      <div className="mt-2 h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
          style={{ width: `${(score / maxScore) * 100}%` }}
        ></div>
      </div>
      <ResetButton onClick={onReset} />
    </div>
  );
}