import React, { Component } from 'react';

class Product extends Component {
    constructor(props) {
        super (props);
        this.state = {
          id: '',
          name: '',
          imageSource: null,
        }
    }

    render () {

      const {
        id,
        name,
        imageSource,
      } = this.props;

      return (
        <div>
          <img src={imageSource} alt={name} />
          <button type="submit">{name}</button>
        </div>
      );
  }
}

export default Product;