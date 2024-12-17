import React from 'react';
import { RotateCcw } from 'lucide-react';

interface ResetButtonProps {
  onClick: () => void;
}

export function ResetButton({ onClick }: ResetButtonProps) {
  return (
    <button
      onClick={onClick}
      className="mt-4 w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl flex items-center justify-center gap-2 transition-colors"
    >
      <RotateCcw className="w-5 h-5" />
      <span className="font-medium">Reset All Scores</span>
    </button>
  );
}