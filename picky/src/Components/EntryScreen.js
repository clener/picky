import React, { Component } from 'react';
import TextField from './TextField'

class EntryScreen extends Component {
    /*constructor(props) {
        super(props);
        this.state = {

        }
        
    }*/

    
  sendData(e) {
    this.props.data(e);
    console.log("data is " + data);
  }

    handleSubmit(e){
        console.log(this.refs);
        e.preventDefault();
    }

    /*handleEntry(userName, passWord) {
        const username = userName;
        const password = passWord;
        projects.push(userName);
        this.setState({projects:projects});
    }*/

    render () {
        return (
            <div>
                <div className="entryScreen">
                    <TextField name="username"/>
                    <TextField name="password"/>  
                    <input onClick={this.handleSubmit.bind(this)} type="submit" value="Enter"/> <br/>
                </div>  
                <a href="#" className="Link">Not a member? Sign up!</a>
            </div>
        );    
    }
}

export default EntryScreen;