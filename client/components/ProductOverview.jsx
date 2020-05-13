import React from "react";
import ImageGallery from "./ImageGallery.jsx";
import MainNameAndPrice from "./MainNameAndPrice.jsx";
import StyleSelector from "./StyleSelector.jsx";
import SizeQuantityForm from "./SizeQuantityForm.jsx";
import CartAndOutfit from "./CartAndOutfit.jsx";
import ProductDescription from "./ProductDescription.jsx";

const ProductOverview = (props) => {
  return (
    <div className="MainProduct">
      <div className="TopInfo">
        <div className="ImageGallery">
          <ImageGallery />
        </div>
        <div className="InfoStyleEvents">
          <div className="NamePrice">
            <MainNameAndPrice />
          </div>
          <div className="StyleSelector">
            <StyleSelector />
          </div>
          <div className="SizeQuantity">
            <SizeQuantityForm />
          </div>
          <div className="CartAndOutfit">
            <CartAndOutfit />
          </div>
        </div>
      </div>
      <div className="BottomDescription">
        <div className="Description">
          <ProductDescription />
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
