import React from "react";
import RelatedProductsListEntry from './components/RelatedProductsListEntry.jsx';
import OutfitListEntry from './components/OutfitListEntry.jsx';
import ProductOverview from "./components/ProductOverview.jsx";

const App = () => {
  return (
    <div>
      <ProductOverview />
      <RelatedProductsListEntry />
      <OutfitListEntry />
    </div>
  );
};

export default App;
