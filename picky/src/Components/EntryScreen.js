import React, { Component } from 'react';
import TextField from './TextField'

class EntryScreen extends Component {
    render () {
        return (
            <div>
                <div className="entryScreen">
                    <TextField name="username"/>
                    <TextField name="password"/>  
                    <input type="submit" value="Enter"/> <br/>
                </div>  
                <a href="#" className="Link">Not a member? Sign up!</a>
            </div>
        );    
    }
}

export default EntryScreen;