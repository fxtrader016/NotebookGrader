import React from 'react';
import { Settings } from 'lucide-react';

interface ConfigButtonProps {
  onClick: () => void;
}

export function ConfigButton({ onClick }: ConfigButtonProps) {
  return (
    <button
      onClick={onClick}
      className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
      aria-label="Open configuration"
    >
      <Settings className="w-6 h-6 text-indigo-600" />
    </button>
  );
}