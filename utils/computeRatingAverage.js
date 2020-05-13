export const computeAverageRating = ({ results }) => {
  return (
    results.reduce((a, b) => {
      return a.rating + b.rating;
    }, 0) / results.length || 0
  );
};
