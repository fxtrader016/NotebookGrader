import { GradingCriteria } from '../types/grading';

export const initialCriteria: GradingCriteria[] = [
  { 
    label: 'Writing Lessons', 
    maxPoints: 10, 
    displayNotebooks: 10, 
    value: 0,
    icon: 'PenLine',
    color: 'emerald'
  },
  { 
    label: 'Sticking Documents', 
    maxPoints: 3, 
    displayNotebooks: 5, 
    value: 0,
    icon: 'Paperclip',
    color: 'blue'
  },
  { 
    label: 'Calligraphy', 
    maxPoints: 2, 
    displayNotebooks: 5, 
    value: 0,
    icon: 'Pen',
    color: 'purple'
  },
  { 
    label: 'Organisation', 
    maxPoints: 5, 
    displayNotebooks: 5, 
    value: 0,
    icon: 'FolderOpen',
    color: 'rose'
  },
];