import React from 'react';
import RelatedProductsListEntry from './components/RelatedProductsListEntry.jsx';
import OutfitListEntry from './components/OutfitListEntry.jsx';
import ProductOverview from './components/ProductOverview.jsx';
import QASection from './components/QASection.jsx';
import Ratings_Reviews from './components/Ratings_Reviews.jsx';

const App = () => {
  return (
    <div>
      <ProductOverview />
      <RelatedProductsListEntry />
      <OutfitListEntry />
      {/* <QASection />
      <Ratings_Reviews /> */}
    </div>
  );
};

export default App;
