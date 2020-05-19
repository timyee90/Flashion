import React from 'react';
import ImageGallery from './ImageGallery.jsx';
import MainNameAndPrice from './MainNameAndPrice.jsx';
import StyleSelector from './StyleSelector.jsx';
import SizeQuantityForm from './SizeQuantityForm.jsx';
import StarRatingModule from '../../../node_modules/react-star-ratings';
class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      category: '',
      price: null,
      salePrice: null,
      currentStyle: {},
      styles: [],
      currentImage: '',
      images: [],
      currentSize: '',
    };

    this.changeCurrentStyle = this.changeCurrentStyle.bind(this);
    this.changeCurrentSize = this.changeCurrentSize.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.stylesInfo !== prevProps.stylesInfo) {
      this.setState({
        productName: this.props.productInfo.name,
        category: this.props.productInfo.category,
        price: this.props.stylesInfo.results[0].original_price,
        salePrice: this.props.stylesInfo.results[0].sale_price,
        currentStyle: this.props.stylesInfo.results[0],
        styles: this.props.stylesInfo.results,
        currentImage: this.props.stylesInfo.results[0].photos[0].url,
        images: this.props.stylesInfo.results[0].photos,
      });
    }
  }

  changeCurrentStyle(obj) {
    this.setState({
      currentStyle: obj,
      currentImage: obj.photos[0].url,
      price: obj.original_price,
      salePrice: obj.sale_price,
    });
  }

  changeCurrentSize(size) {
    this.setState({
      currentSize: size,
    });
  }

  render() {
    return (
      <div className='TopInfo'>
        <div className='ImageGallery'>
          <ImageGallery display={this.state.currentImage} />
        </div>
        <div className='InfoStyleEvents'>
          {this.props.rating ? (
            <div className='productStars'>
              <StarRatingModule
                rating={this.props.rating}
                numberOfStars={5}
                starDimension={'12px'}
                starSpacing={'1px'}
              />

              <a style={{ fontSize: '12px', marginLeft: '2px', color: 'gray' }}>
                {' Read all reviews'}
              </a>
            </div>
          ) : (
            ''
          )}
          <div className='NamePrice'>
            <MainNameAndPrice
              category={this.state.category}
              name={this.state.productName}
              price={this.state.price}
              salePrice={this.state.salePrice}
            />
          </div>
          <div className='StyleSelector'>
            <StyleSelector
              currentStyle={this.state.currentStyle}
              styles={this.state.styles}
              changeCurrentStyle={this.changeCurrentStyle}
            />
          </div>
          <div className='SizeQuantityCart'>
            <SizeQuantityForm
              style={this.state.currentStyle}
              changeSize={this.changeCurrentSize}
              currentSize={this.state.currentSize}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
