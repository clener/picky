import React, { Component } from 'react';
import Product from '../Basic/Product';
import bag from '../../bag.png'

class Products extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Product id='1' name='example' src={bag} />
      </div>
    );
  }
}

export default Products;
