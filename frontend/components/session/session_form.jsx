import React, { Component } from 'react';
import SessionGreeting from './session_greeting';
import ButtonAndMessage from './button_and_message';

class SessionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formType: this.props.formType,
            email: '',
            password: '',
            fname: '',
            lname: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // if email = "no email", must mean no email in the database, change formType to "Sign Up"
    // otherwise, email is in the database, change formType to "Log In"
    handleFormType(email) {
        let formType = email === "no email" ? "Sign Up" : "Log In";
        this.setState({ formType });
    }

    // handle whether the submit button performs sign in or sign up action
    handleSubmit(event) {
        event.preventDefault();
        switch (this.state.formType) {
            case "Get Started":
                this.props.verifyUser(this.state.email).then(
                    res => this.handleFormType(res.email)
                )
                break
            case "Sign Up":
                debugger
                this.props.signUp(this.state);
                break;
            case "Log In":
                let emailAndPassword = { email: this.state.email, password: this.state.password }
                this.props.logIn(emailAndPassword);
                break;
        }
    }

    // change state of whatever 'field' is
    handleChange(field) {
        return (event) => {
            this.setState({ [field]: event.target.value });
        }
    }

    render() {
        const { errors } = this.props;
        let imageSrc, alt, greetingHeaderText, greetingMessage, extraInputs, message, fontSize;
        switch (this.state.formType) {
            case "Get Started":
                imageSrc = window.logo;
                alt = "session icon";
                greetingHeaderText = "Let's get started";
                greetingMessage = "Enter your email to get started.";
                fontSize = "12px";
                message = "By continuing, I accept the Eventbrite terms of service, community guidelines and have read the privacy policy."
                break;
            case "Log In":
                imageSrc = window.signinIcon;
                alt = "signin icon";
                greetingHeaderText = "Welcome Back";
                greetingMessage = "Please enter your password to log in.";
                message = "Forgot password";
                fontSize = "14px";
                extraInputs = <input type="password" placeholder="Password" onChange={this.handleChange("password")} value={this.state.password} />;
                break;
            case "Sign Up":
                imageSrc = window.signinIcon;
                alt = "signup icon";
                greetingHeaderText = "Welcome";
                greetingMessage = "Create an Account";
                message = "Log In Instead";
                fontSize = "14px";
                extraInputs =
                    <>
                        <input type="text" placeholder="Confirm Email" />
                        <div className="first-last-name">
                            <input type="text" placeholder="First Name" onChange={this.handleChange("fname")} value={this.state.fname} />
                            <input type="text" placeholder="Last Name" onChange={this.handleChange("lname")} value={this.state.lname} />
                        </div>
                        <input type="password" placeholder="Password" onChange={this.handleChange("password")} value={this.state.password} />
                    </>;
                break;
        }

        // if there are errors, map them into list item elements
        let formErrors;
        if (errors.responseJSON) formErrors = errors.responseJSON.map((error, idx) => <li key={idx}>{error}</li>);
        return (
            <div className="session-form">
                <SessionGreeting
                    imageSrc={imageSrc}
                    alt={alt}
                    greetingHeaderText={greetingHeaderText}
                    greetingMessage={greetingMessage} />

                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.email} onChange={this.handleChange("email")} placeholder="Email Address" />
                    {extraInputs}
                    <ButtonAndMessage 
                        type={"submit"}
                        value={this.state.formType}
                        message={message} 
                        fontSize={fontSize} />
                </form>
                <ul>
                    {formErrors}
                </ul>
            </div>
        )
    }
}

export default SessionForm;

{/* Signup / Login link */ }
{/* <Link to={`/${addressUrl}`}>{addressUrl}</Link> */ }