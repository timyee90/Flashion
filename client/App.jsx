import React, { useEffect } from 'react';
import RelatedProductsListEntry from './components/RelatedProductsListEntry.jsx';
import OutfitListEntry from './components/OutfitListEntry.jsx';
import ProductOverview from './containers/ProductOverviewContainer.js';
import QASection from './containers/QASectionContainer.js';
import Ratings_Reviews from './components/Ratings_Reviews.jsx';
import { useParams } from 'react-router-dom';

const App = (props) => {
  const params = useParams();
  useEffect(() => {
    console.log(params.id);
    props.setProductID(params.id);
  });
  return (
    <div>
      <ProductOverview />
      <RelatedProductsListEntry />
      <OutfitListEntry />
      <QASection />
      <Ratings_Reviews />
    </div>
  );
};

export default App;
