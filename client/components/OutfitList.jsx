import React from 'react';
import OutfitListEntry from './OutfitListEntry.jsx';

const OutfitList = (props) => {
  const outfitEntries = props.favorites.map((favorite) => {
    return <OutfitListEntry favorite={favorite} />;
  });
  return <div>{outfitEntries.length > 0 ? outfitEntries : ''}</div>;
};

export default OutfitList;
