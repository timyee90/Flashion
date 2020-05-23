export const compareProducts = (current, related) => {
  const comparisonTable = [];
  let currentFeatures = current.map((item) => item.value);
  let relatedFeatures = related.map((item) => item.value);
  const allFeatures = [
    ...new Set(currentFeatures.concat(relatedFeatures)),
  ].filter((item) => item !== 'null');

  currentFeatures = allFeatures.map((item) => {
    return currentFeatures.includes(item);
  });
  relatedFeatures = allFeatures.map((item) => {
    return relatedFeatures.includes(item);
  });

  // transposes the columns(features) into rows
  let appendToTable = (features) => {
    let idx = 0;

    for (const value of features) {
      if (comparisonTable[idx] === undefined) {
        comparisonTable.push([]);
      }
      comparisonTable[idx++].push(value);
    }
  };
  appendToTable(currentFeatures);
  appendToTable(allFeatures);
  appendToTable(relatedFeatures);

  return comparisonTable;
};
