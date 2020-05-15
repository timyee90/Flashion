export const computeRecommendedPercentage = (reviews) => {
  console.log(reviews);
  const total = reviews.length;
  const count = reviews.reduce((acc, curr) => {
    acc += curr.recommend;
    return acc;
  }, 0);
  const percentage = (count / total) * 100;
  return percentage;
};
