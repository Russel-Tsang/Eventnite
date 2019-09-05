import React, { Component } from 'react';
import SessionGreeting from '../helper_components/session_greeting';
import ButtonAndMessage from './button_and_message';
import StyledInput from '../helper_components/styled_input';

class SessionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirm_email: '',
            fname: '',
            lname: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // if email = "no email", then email is not in the database, change formType to "Sign Up"
    // otherwise, email is in the database, change formType to "Log In"
    handleFormType(email) {
        let formType = email === "no email" ? "signup" : "login";
        this.props.history.push(`/signin/${formType}`);
        // this.setState({ formType });
    }

    // handle whether the submit button performs sign in or sign up action
    handleSubmit(event) {
        event.preventDefault();
        switch (this.props.location.pathname.split('/')[2]) {
            case "signup":
                this.props.signUp(this.state);
                break;
            case "login":
                this.props.logIn({ email: this.state.email, password: this.state.password });
                break;
            default:
                this.props.verifyUser(this.state.email).then(res => this.handleFormType(res.email));
                break
        }
    }

    // change state of 'field' argument
    handleChange(field) {
        return (event) => {
            this.setState({ [field]: event.target.value });
        }
    }

    handleErrors() {
        if (this.props.errors === "") return;
        let errors = this.props.errors;
        const errorsObject = {};
        errors.forEach(error => {
            let temp = error.split(" ");
            errorsObject[temp[0]] = error;
        })
        return errorsObject;
    }

    render() {
        let formErrors = this.handleErrors();
        const { fname, lname, email, password, formType, confirm_email } = this.state;
        let imageSrc, alt, greetingHeaderText, greetingMessage, extraInputs, message, fontSize, formError, emailError, emailErrors, firstNameError, lastNameError, passwordError;
        // change display of form depending on formType
        switch (this.props.location.pathname.split('/')[2]) {
            case "login":
                imageSrc = window.signinIcon;
                alt = "signin icon";
                greetingHeaderText = "Welcome Back";
                greetingMessage = "Please enter your password to log in.";
                fontSize = "14px";
                formError = formErrors ? formErrors["Invalid"] : "";

                extraInputs =
                    <StyledInput
                        className="password"
                        type="password"
                        label="Password"
                        onChange={this.handleChange("password")}
                        value={password}
                        error={formError} />
                break;
            case "signup":
                imageSrc = window.signinIcon;
                alt = "signup icon";
                greetingHeaderText = "Welcome";
                greetingMessage = "Create an Account";
                message = "Log In Instead";
                fontSize = "14px";
                if (formErrors && formErrors["Fname"]) firstNameError = "First name can't be blank";
                if (formErrors && formErrors["Lname"]) lastNameError = "Last name can't be blank";
                if (formErrors && formErrors["Password"]) passwordError = formErrors["Password"];
                if (formErrors && formErrors["Email"]) emailError = formErrors["Email"];
                if (formErrors && formErrors["Emails"]) emailErrors = formErrors["Emails"];
                extraInputs =
                    <div className="signup-div">
                        <StyledInput 
                            type="text" 
                            label="Confirm Email"
                            onChange={this.handleChange("confirm_email")}
                            value={confirm_email} 
                            error={emailErrors} />
                        <div className="first-last-name">
                            <StyledInput 
                                type="text" 
                                label="First Name" 
                                onChange={this.handleChange("fname")} 
                                value={fname} 
                                error={firstNameError} />
                            <StyledInput 
                                type="text" 
                                label="Last Name" 
                                onChange={this.handleChange("lname")} 
                                value={lname} 
                                error={lastNameError} />
                        </div>
                        <StyledInput 
                            type="password" 
                            label="Password" 
                            onChange={this.handleChange("password")} 
                            value={password} 
                            error={passwordError} />
                    </div>;
                break;
            default:
                imageSrc = window.logo;
                alt = "session icon";
                greetingHeaderText = "Let's get started";
                greetingMessage = "Enter your email to get started.";
                fontSize = "12px";
                message = "By continuing, I accept the Eventnite terms of service, community guidelines and have read the privacy policy."
                break;
        }

        return (
            <div className="session-form">
                <SessionGreeting
                    imageSrc={imageSrc}
                    alt={alt}
                    greetingHeaderText={greetingHeaderText}
                    greetingMessage={greetingMessage} />

                <form onSubmit={this.handleSubmit}>
                    <StyledInput 
                        type={"email"} 
                        value={email} 
                        onChange={this.handleChange("email")} 
                        label="Email Address" 
                        error={emailError} />

                    {extraInputs}
                    <ButtonAndMessage 
                        type={"submit"}
                        value={formType}
                        message={message} 
                        fontSize={fontSize} />
                </form>
            </div>
        )
    }
}

export default SessionForm;