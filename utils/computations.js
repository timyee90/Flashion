export const computeRecommendedPercentage = (reviews) => {
  if (reviews.length > 0) {
    const total = reviews.length;
    const count = reviews.reduce((acc, curr) => {
      acc += curr.recommend;
      return acc;
    }, 0);
    const percentage = (count / total) * 100;
    return percentage;
  } else {
    return 0;
  }
};

export const toggleRatingFilter = (rating, currentRatingFilters) => {
  if (currentRatingFilters.includes(rating)) {
    let index = currentRatingFilters.indexOf(rating);
    currentRatingFilters.splice(index, 1);
  } else {
    currentRatingFilters.push(rating);
  }
  return [...currentRatingFilters];
};

export const filterReviews = (reviews, ratingSort) => {
  if (ratingSort.length > 0) {
    return reviews.filter((review) => {
      return ratingSort.includes(review.rating.toString());
    });
  } else {
    return [...reviews];
  }
};
