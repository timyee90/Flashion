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
      currentImageIndex: 0,
      images: [],
      currentSize: '',
    };

    this.changeCurrentStyle = this.changeCurrentStyle.bind(this);
    this.changeCurrentSize = this.changeCurrentSize.bind(this);
    this.changeToNextPic = this.changeToNextPic.bind(this);
    this.changeToPrevPic = this.changeToPrevPic.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.productInfo !== prevProps.productInfo) {
      this.setState({
        productName: this.props.productInfo.name,
        category: this.props.productInfo.category,
      });
    } else if (this.props.stylesInfo !== prevProps.stylesInfo) {
      this.setState({
        price: this.props.stylesInfo.results[0].original_price,
        salePrice: this.props.stylesInfo.results[0].sale_price,
        currentStyle: this.props.stylesInfo.results[0],
        styles: this.props.stylesInfo.results,
        currentImage: this.props.stylesInfo.results[0].photos[
          this.state.currentImageIndex
        ].url,
        images: this.props.stylesInfo.results[0].photos,
      });
    } else if (this.state.currentImageIndex !== prevState.currentImageIndex) {
      this.setState({
        currentImage: this.props.stylesInfo.results[0].photos[
          this.state.currentImageIndex
        ].url,
      });
    }
  }

  changeCurrentStyle(obj) {
    console.log('BEFORE SET STATE', this.state.images);
    this.setState(
      {
        currentStyle: obj,
        currentImage: obj.photos[this.state.currentImageIndex].url,
        price: obj.original_price,
        salePrice: obj.sale_price,
        images: obj.photos,
      },
      () => console.log(this.state.images)
    );
  }

  changeCurrentSize(size) {
    this.setState({
      currentSize: size,
    });
  }

  changeToNextPic() {
    if (this.state.currentImageIndex === this.state.images.length - 1) {
      this.setState({
        currentImageIndex: 0,
      });
    } else {
      this.setState({
        currentImageIndex: this.state.currentImageIndex + 1,
      });
    }
  }

  changeToPrevPic() {
    if (this.state.currentImageIndex === 0) {
      this.setState({
        currentImageIndex: this.state.images.length - 1,
      });
    } else {
      this.setState({
        currentImageIndex: this.state.currentImageIndex - 1,
      });
    }
  }

  render() {
    return (
      <div className='TopInfo'>
        <div className='ImageGallery'>
          <ImageGallery
            display={this.state.currentImage}
            displayIndex={this.state.currentImageIndex}
            images={this.state.images}
            nextImage={this.changeToNextPic}
            prevImage={this.changeToPrevPic}
          />
        </div>
        <div className='InfoStyleEvents'>
          {this.props.rating ? (
            <div className='productStars'>
              <StarRatingModule
                rating={this.props.rating}
                numberOfStars={5}
                starDimension={'16px'}
                starSpacing={'1px'}
                starRatedColor={'Gold'}
              />

              <a style={{ fontSize: '16px', marginLeft: '5px', color: 'gray' }}>
                {'Read all reviews'}
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
