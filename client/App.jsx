import React, { useEffect } from 'react';
import RelatedProductsList from './containers/RelatedProductsContainer.js';
import ProductOverview from './containers/ProductOverviewContainer.js';
import QASection from './containers/QASectionContainer.js';
import Ratings_Reviews from './components/Ratings_Reviews.jsx';
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
      <QASection />
      <Ratings_Reviews />
    </div>
  );
};

export default App;
