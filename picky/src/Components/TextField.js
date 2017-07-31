import React, { Component } from 'react';

class TextField extends Component {
  render() {
    console.log(this.props);
    return (
      <form className="Form">
        {this.props.name}: <br/>
        <input type="text" name={this.props.name}/><br/>
      </form>
    );
  }
}

export default TextField;