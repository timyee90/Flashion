import React from 'react';
import ProductListEntry from './ProductListEntry.jsx';

const RelatedProductsListEntry = (props) => {
  return <div>{ProductListEntry(props)}</div>;
};

export default RelatedProductsListEntry;
