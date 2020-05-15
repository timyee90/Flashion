import React from 'react';
import ImageGallery from './ImageGallery.jsx';
import MainNameAndPrice from './MainNameAndPrice.jsx';
import StyleSelector from './StyleSelector.jsx';
import SizeQuantityForm from './SizeQuantityForm.jsx';
import CartAndOutfit from './CartAndOutfit.jsx';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      price: null,
      style_id: null,
      currentImage: '',
      images: [],
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.stylesInfo !== prevProps.stylesInfo) {
      this.setState({
        productName: this.props.productInfo.name,
        price: this.props.productInfo.default_price,
        currentImage: this.props.stylesInfo.results[0].photos[0].url,
        images: this.props.stylesInfo.results[0].photos,
      });
    }
  }

  render() {
    return (
      <div className='TopInfo'>
        <div className='ImageGallery'>
          <ImageGallery display={this.state.currentImage} />
        </div>
        <div className='InfoStyleEvents'>
          <div className='NamePrice'>
            <MainNameAndPrice
              name={this.state.productName}
              price={this.state.price}
            />
          </div>
          <div className='StyleSelector'>
            <StyleSelector />
          </div>
          <div className='SizeQuantity'>
            <SizeQuantityForm />
          </div>
          <div className='CartAndOutfit'>
            <CartAndOutfit />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
