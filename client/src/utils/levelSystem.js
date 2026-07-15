export function calculateLevel(xp) {
  const level = Math.floor(xp / 100) + 1;

  const currentLevelXP = (level - 1) * 100;
  const nextLevelXP = level * 100;

  const progress =
    ((xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;

  return {
    level,
    currentLevelXP,
    nextLevelXP,
    progress,
  };
}
1;
