import React, { Component } from 'react';

class TextField extends Component {
  constructor(props) {
    super (props);
    this.state = { 
      input: '' 
    };
    this.sendData = this.sendData.bind(this);
  }

  sendData(input) {
    this.props.receiveData(input);
    this.setState({
      input: input.target.value
    });
    console.log(input.target.value);
  }

  render() {
    return (
      <form className="Form">
        {this.props.name}: <br/>
        <input value={this.state.input} onChange={this.sendData}/><br/>
      </form>
    );
  }
}

export default TextField;