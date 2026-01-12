export const calculateStats = (mins: number[], maxs: number[]) => {
  if (mins.length === 0 || maxs.length === 0) {
    throw new Error("No temperature data");
  }

  let globalMin = mins[0];
  let globalMax = maxs[0];
  let sumOfDailyMeans = 0;

  for (let i = 0; i < mins.length; i++) {
    if (mins[i] < globalMin) globalMin = mins[i];
    if (maxs[i] > globalMax) globalMax = maxs[i];

    const dailyMean = (mins[i] + maxs[i]) / 2;
    sumOfDailyMeans += dailyMean;
  }

  const average = Number((sumOfDailyMeans / mins.length).toFixed(2));

  return {
    min: Number(globalMin.toFixed(2)),
    max: Number(globalMax.toFixed(2)),
    average,
  };
};
