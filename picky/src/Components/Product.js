import React, { Component } from 'react';

class Product extends Component {
    render () {
        return (
            <div>
                Hello
                {this.props.id}
            </div>
        );
    }
}

export default Product;