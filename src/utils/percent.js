// Mirrors original: Math.min(Math.round((raised / goal) * 100), 100)
export function computePercent(raised, goal) {
  return Math.min(Math.round((raised / goal) * 100), 100);
}
