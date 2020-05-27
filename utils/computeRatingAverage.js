// utility function for computing average rating
export const computeAverageRating = (results) => {
  return (
    results.reduce((a, b) => {
      return a + b.rating;
    }, 0) / results.length || 0
  );
};
