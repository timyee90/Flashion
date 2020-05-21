import React, { useEffect } from 'react';
import ProductOverview from './containers/ProductOverviewContainer.js';
import RelatedProductsList from './containers/RelatedProductsContainer.js';
import OutfitList from './containers/outfitContainer.js';
import QASection from './containers/QASectionContainer.js';
import Ratings_Reviews from './components/RatingsReviews/Ratings_Reviews.jsx';
import { useParams } from 'react-router-dom';

const App = (props) => {
  const params = useParams();
  useEffect(() => {
    props.setProductID(params.id);
  });
  return (
    <div>
      <ProductOverview />
      <RelatedProductsList />
      <OutfitList />
      <QASection />
      <Ratings_Reviews />
    </div>
  );
};

export default App;
