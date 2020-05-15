import React, { useEffect } from 'react';
import RelatedProductsListEntry from './components/RelatedProductsListEntry.jsx';
import OutfitListEntry from './components/OutfitListEntry.jsx';
import ProductOverview from './components/ProductOverview.jsx';
import RelatedProductsList from './containers/RelatedProductsContainer.js';
import QASection from './containers/QASectionContainer.js';
import Ratings_Reviews from './components/Ratings_Reviews.jsx';

const App = () => {
  return (
    <div>
      <ProductOverview />
      {/* <RelatedProductsListEntry /> */}
      <RelatedProductsList />
      {/* <OutfitListEntry /> */}
      <QASection />
      <Ratings_Reviews />
    </div>
  );
};

export default App;
