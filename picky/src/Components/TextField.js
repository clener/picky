import React, { Component } from 'react';

class TextField extends Component {
  /*constructor (props) {
    super (props);
    this.state = {
      input = ''
    };
  }*/

  sendData(e) {
    this.props.data(e);
  }


  render() {
    return (
      <form className="Form">
        {this.props.name}: <br/>
        <input 
          value={this.state.input} onChange={e => sendData(e)}/><br/>
      </form>
    );
  }
}

export default TextField;