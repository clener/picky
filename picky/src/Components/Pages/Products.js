import React, { Component } from 'react';
import Product from '../Basic/Product';
import bag from '../../bag.png';
import axios from 'axios';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3100`)
      .then(res => {
        console.log(res)
        //const data = res.data.data.children.map(obj => obj.data);
        //this.setState({ data });
      });
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
