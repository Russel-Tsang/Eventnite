import React, { Component } from 'react';
import SessionGreeting from './session_greeting';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.processForm(this.state);
    }

    handleChange(field) {
        return (event) => {
            this.setState({ [field]: event.target.value });
        }
    }

    render() {
        const { errors, formType } = this.props;
        
        // if there are errors, map them into <li> elements
        let formErrors;
        if (errors.responseJSON) {
            formErrors = errors.responseJSON.map((error, idx) => <li key={idx}>{error}</li>)
        }

        return (
            <div className="session-form">
                {/* <img className="logo_orange" src={"assets/logo_orange.png"}/> */}
                <SessionGreeting
                    imgSrc={"assets/signup_icon.svg"}
                    alt={"signin icon"}
                    greetingHeaderText={"Welcome Back"}
                    greetingMessage={"Please enter your password to log in."} />
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.email} onChange={this.handleChange("email")} placeholder="Email Address" />
                    <input type="password" value={this.state.password} onChange={this.handleChange("password")} placeholder="Password" />
                    <input type="submit" value={formType} />
                </form>
                <ul>
                    {formErrors}
                </ul>
            </div>
        )
    }
}

export default LoginForm;

{/* Signup / Login link */ }
{/* <Link to={`/${addressUrl}`}>{addressUrl}</Link> */ }