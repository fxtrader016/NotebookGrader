export interface GradingCriteria {
  label: string;
  maxPoints: number;
  displayNotebooks: number;
  value: number;
  icon: string;
  color: string;
}

export interface NotebookRatingProps {
  criteria: GradingCriteria;
  onChange: (value: number) => void;
}