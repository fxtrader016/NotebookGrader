import React from 'react';
import { GraduationCap } from 'lucide-react';

export function Header() {
  return (
    <div className="text-center mb-6">
      <div className="flex items-center justify-center mb-2">
        <GraduationCap className="w-10 h-10 text-indigo-600" />
        <h1 className="text-2xl font-bold text-indigo-900 ml-2">NotebookGrader</h1>
      </div>
      <p className="text-sm text-indigo-600 font-medium">By: MOHAMED AIT MOUS</p>
    </div>
  );
}