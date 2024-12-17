export const calculatePoints = (selected: number, displayNotebooks: number, maxPoints: number): number => {
  return (selected / displayNotebooks) * maxPoints;
};

export const roundToQuarter = (value: number): number => {
  return Math.round(value * 4) / 4;
};