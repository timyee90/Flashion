export const compareProducts = (current, related) => {
  let currentFeatures = current.map((item) => item.value);
  let relatedFeatures = related.map((item) => item.value);
  let allFeatures = [
    ...new Set(currentFeatures.concat(relatedFeatures)),
  ].filter((item) => item !== 'null');

  currentFeatures = allFeatures.map((item) => {
    return currentFeatures.includes(item);
  });
  relatedFeatures = allFeatures.map((item) => {
    return relatedFeatures.includes(item);
  });

  // transpose the features into rows
  let comparisonTable = [];
  let idx = 0;

  // iterate over current features
  for (const value of currentFeatures) {
    if (comparisonTable[idx] === undefined) {
      comparisonTable.push([]);
    }
    comparisonTable[idx].push(value);
    idx++;
  }

  // iterate over all features
  idx = 0;
  for (const value of allFeatures) {
    comparisonTable[idx].push(value);
    idx++;
  }

  // iterate over related features
  idx = 0;
  for (const value of relatedFeatures) {
    comparisonTable[idx].push(value);
    idx++;
  }

  return comparisonTable;
};
