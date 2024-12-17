import React, { useState } from 'react';
import { X } from 'lucide-react';
import { GradingCriteria } from '../types/grading';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  criteria: GradingCriteria[];
  onSave: (newCriteria: GradingCriteria[]) => void;
}

export function ConfigModal({ isOpen, onClose, criteria, onSave }: ConfigModalProps) {
  const [configValues, setConfigValues] = useState<GradingCriteria[]>(criteria);

  if (!isOpen) return null;

  const handlePointsChange = (index: number, points: string) => {
    const newValue = Math.max(0, Number(points));
    const newConfig = [...configValues];
    newConfig[index] = { ...newConfig[index], maxPoints: newValue };
    setConfigValues(newConfig);
  };

  const handleSave = () => {
    onSave(configValues);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
        
        <h2 className="text-xl font-bold text-indigo-900 mb-6">Configure Maximum Points</h2>
        
        <div className="space-y-4">
          {configValues.map((item, index) => (
            <div key={item.label} className="flex items-center justify-between">
              <label className="text-gray-700 font-medium">{item.label}</label>
              <input
                type="number"
                min="0"
                step="0.25"
                value={item.maxPoints}
                onChange={(e) => handlePointsChange(index, e.target.value)}
                className="w-20 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}