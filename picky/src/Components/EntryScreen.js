import React, { Component } from 'react';
import TextField from './TextField'

class EntryScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : '',
            isUserNew : false,
        };
        this.handleData = this.handleData.bind(this);
        this.getData = this.getData.bind(this);
        this.signUp = this.signUp.bind(this);
    }

    handleData(field) {
        return (data) => {
            const x = Object.assign({}, this.state);
            x[field] = data.target.value;
            this.setState(x);
            console.log(this.state);
        };
    }

    getData() {
        const username = this.state.username;
        const password = this.state.password;
        console.log("username is " + username + " and password is " + password);

    }

    signUp() {
        const isUserNew = Object.assign({}, this.state, { isUserNew: true });
        this.setState(isUserNew);
    }

    render () {
        return (
            <div>
                <div className="entryScreen">
                    {!this.state.isUserNew ? 
                        <div>
                            <TextField name="username" receiveData={this.handleData('username')} />
                            <TextField name="password" receiveData={this.handleData('password')} />
                            <input type="submit" value="Enter" onClick={this.getData} /> <br/>
                            <input type="submit" value="Not a member? Sign up!" onClick={this.signUp} />
                        </div>  
                        :
                        <div> 
                            <TextField name="email" receiveData={this.handleData('email')}/>
                            <TextField name="username" receiveData={this.handleData('username')} />
                            <TextField name="password" receiveData={this.handleData('password')} />
                            <input type="submit" value="Enter" onClick={this.getData} /> 
                        </div>
                    }
                </div>  
            </div>
        );    
    }
}

export default EntryScreen;