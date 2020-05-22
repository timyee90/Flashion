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
      currentStyleIndex: 0,
      styles: [],
      currentImage: '',
      currentImageIndex: 0,
      images: [],
      currentSize: '',
      currentQuantity: null,
      showFullScreen: false,
    };

    this.changeCurrentStyle = this.changeCurrentStyle.bind(this);
    this.changeCurrentSize = this.changeCurrentSize.bind(this);
    this.changeToNextPic = this.changeToNextPic.bind(this);
    this.changeToPrevPic = this.changeToPrevPic.bind(this);
    this.fullDisplay = this.fullDisplay.bind(this);
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
        currentStyle: this.props.stylesInfo.results[
          this.state.currentStyleIndex
        ],
        styles: this.props.stylesInfo.results,
        currentImage: this.props.stylesInfo.results[
          this.state.currentStyleIndex
        ].photos[this.state.currentImageIndex].url,
        images: this.props.stylesInfo.results[this.state.currentStyleIndex]
          .photos,
      });
    } else if (this.state.currentImageIndex !== prevState.currentImageIndex) {
      this.setState({
        currentImage: this.props.stylesInfo.results[
          this.state.currentStyleIndex
        ].photos[this.state.currentImageIndex].url,
      });
    }
  }

  changeCurrentStyle(obj, key) {
    this.setState({
      currentStyle: obj,
      currentStyleIndex: key,
      currentImage: obj.photos[this.state.currentImageIndex].url,
      price: obj.original_price,
      salePrice: obj.sale_price,
      images: obj.photos,
    });
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

  fullDisplay() {
    console.log(this.state.showFullScreen);
    this.setState(
      {
        showFullScreen: !this.state.showFullScreen,
      },
      () => console.log(this.state.showFullScreen)
    );
  }

  render() {
    return (
      <div className='TopInfo'>
        {this.state.showFullScreen ? (
          <>
            <div
              className='ImageGallery'
              style={{ width: '100%', height: '100%' }}
            >
              <ImageGallery
                display={this.state.currentImage}
                displayIndex={this.state.currentImageIndex}
                images={this.state.images}
                nextImage={this.changeToNextPic}
                prevImage={this.changeToPrevPic}
                currentIndex={this.state.currentImageIndex}
                fullDisplay={this.fullDisplay}
                showFullScreen={this.state.showFullScreen}
              />
            </div>
          </>
        ) : (
          <>
            <div
              className='ImageGallery'
              style={{ width: '65%', height: '100%' }}
            >
              <ImageGallery
                display={this.state.currentImage}
                displayIndex={this.state.currentImageIndex}
                images={this.state.images}
                nextImage={this.changeToNextPic}
                prevImage={this.changeToPrevPic}
                currentIndex={this.state.currentImageIndex}
                fullDisplay={this.fullDisplay}
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

                  <a
                    style={{
                      fontSize: '16px',
                      marginLeft: '5px',
                      color: 'gray',
                    }}
                  >
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
          </>
        )}
      </div>
    );
  }
}

export default ProductCard;
