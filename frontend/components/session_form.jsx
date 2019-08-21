import React from 'react';
import {Link} from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    updatekey(key){
        return e => this.setState({[key]: e.target.value})
    }

    render(){
        return(
            <div>
                <ul>
                    {this.props.errors.map((err) => {
                        return (
                            <li>{err}</li>
                        )
                    })}
                </ul>
                <Link to={"/" + (this.props.formType === 'signup' ? "login" : "signup")}>{this.props.formType === "signup" ? "Log in" : "Sign Up"}</Link>
                <h1>{this.props.formType==="signup" ? "Sign Up" : "Log in"}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username: 
                        <input type="text" placeholder="username" value={this.state.username} onChange={this.updatekey("username")} />
                        </label>
                    <label>
                        Password:
                        <input type="password" placeholder="password" value={this.state.password} onChange={this.updatekey("password")} />
                    </label>
                    <input type="submit" value={this.props.formType === 'signup' ? "Sign Up" : "Log in"}/>
                </form>
            </div>
        )
    }
}

export default SessionForm;