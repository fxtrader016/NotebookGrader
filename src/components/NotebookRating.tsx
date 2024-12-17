import React from 'react';
import { Notebook, PenLine, Paperclip, Pen, FolderOpen } from 'lucide-react';
import { NotebookRatingProps } from '../types/grading';
import { calculatePoints } from '../utils/calculations';

const icons = {
  PenLine,
  Paperclip,
  Pen,
  FolderOpen,
};

const colorClasses = {
  emerald: {
    text: 'text-emerald-600',
    fill: 'text-emerald-600 fill-emerald-600',
    label: 'text-emerald-900',
  },
  blue: {
    text: 'text-blue-600',
    fill: 'text-blue-600 fill-blue-600',
    label: 'text-blue-900',
  },
  purple: {
    text: 'text-purple-600',
    fill: 'text-purple-600 fill-purple-600',
    label: 'text-purple-900',
  },
  rose: {
    text: 'text-rose-600',
    fill: 'text-rose-600 fill-rose-600',
    label: 'text-rose-900',
  },
};

export function NotebookRating({ criteria, onChange }: NotebookRatingProps) {
  const { label, maxPoints, displayNotebooks, value, icon, color } = criteria;
  
  const handleChange = (selected: number) => {
    const points = calculatePoints(selected, displayNotebooks, maxPoints);
    onChange(points);
  };

  const selectedNotebooks = Math.round((value / maxPoints) * displayNotebooks);
  const IconComponent = icons[icon as keyof typeof icons];
  const colors = colorClasses[color as keyof typeof colorClasses];

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <IconComponent className={`w-6 h-6 ${colors.text}`} />
          <label className={`text-lg font-medium ${colors.label}`}>{label}</label>
        </div>
        <span className={`text-lg font-medium ${colors.text}`}>
          {value.toFixed(2)}/{maxPoints}
        </span>
      </div>
      <div className="flex gap-1">
        {[...Array(displayNotebooks)].map((_, index) => (
          <button
            key={index}
            onClick={() => handleChange(index + 1)}
            className="transition-transform hover:scale-110 focus:outline-none"
          >
            <Notebook
              size={28}
              className={`${
                index < selectedNotebooks
                  ? colors.fill
                  : 'text-gray-300 fill-gray-300'
              } transition-colors`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}