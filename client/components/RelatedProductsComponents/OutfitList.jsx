import React, { useState, useEffect } from 'react';
import OutfitListEntry from './OutfitListEntry.jsx';
import { getSingleProductInfo } from '../../../utils/queries.js';

const OutfitList = (props) => {
  const [currentProd, setCurrentProd] = useState([]);
  const [outfit, setOutfit] = useState([]);

  useEffect(() => {
    getSingleProductInfo(props.product_id).then((data) => {
      setCurrentProd(data);
    });
  }, [props.product_id]);

  const handleRemove = (id) => {
    const tempOutfit = JSON.parse(sessionStorage.getItem('outfit')) || [];
    const index = tempOutfit
      .map((item) => {
        return item[0].id;
      })
      .indexOf(parseInt(id));
    if (index > -1) tempOutfit.splice(index, 1);
    sessionStorage.setItem('outfit', JSON.stringify(tempOutfit));
    setOutfit(JSON.parse(sessionStorage.getItem('outfit')));
  };

  const handleAdd = () => {
    const tempOutfit = JSON.parse(sessionStorage.getItem('outfit')) || [];
    if (
      tempOutfit.length === 0 ||
      tempOutfit
        .map((prod) => {
          return prod[0].id;
        })
        .indexOf(currentProd[0].id) === -1
    ) {
      sessionStorage.setItem(
        'outfit',
        JSON.stringify(tempOutfit.concat([currentProd]))
      );
      setOutfit(JSON.parse(sessionStorage.getItem('outfit')));
    }
  };

  const addOutfit = (
    <div className='add-outfit-container'>
      <div className='btn-outfit'>
        <button onClick={handleAdd}>Add to Your Outfit</button>
      </div>
    </div>
  );

  const outfitArray = JSON.parse(sessionStorage.getItem('outfit')) || [];
  const outfitEntries = outfitArray.map((item) => {
    return (
      <OutfitListEntry
        className='product-container'
        setProductId={(id) => {
          props.setProductID(id);
        }}
        id={item[0].id}
        key={item[0].id}
        product={item[0]}
        style={item[1]}
        rating={item[2]}
        currentId={props.product_id}
        remove={handleRemove}
      />
    );
  });

  return (
    <div>
      <h3 className='outfit products-title'>Your Outfit</h3>
      <div className='outfit container'>
        {addOutfit}
        {outfitEntries.length > 0 ? outfitEntries : ''}
      </div>
    </div>
  );
};

export default OutfitList;
