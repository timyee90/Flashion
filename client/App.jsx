import React from 'react';
import RelatedProductsListEntry from './components/RelatedProductsListEntry.jsx';
import OutfitListEntry from './components/OutfitListEntry.jsx';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>Hello {name}</h1>
        <RelatedProductsListEntry />
        <OutfitListEntry />
      </>
    );
  }
}

export default App;
