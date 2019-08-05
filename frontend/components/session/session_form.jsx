import React, { Component } from 'react';
import SessionGreeting from '../helper_components/session_greeting';
import ButtonAndMessage from './button_and_message';
import StyledInput from '../helper_components/styled_input';

class SessionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formType: this.props.formType,
            email: '',
            password: '',
            confirmPassword: '',
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
                this.props.signUp(this.state);
                break;
            case "Log In":
                let emailAndPassword = { email: this.state.email, password: this.state.password }
                this.props.logIn(emailAndPassword);
                break;
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
        const { fname, lname, email, password, formType, confirmPassword } = this.state;
        let imageSrc, alt, greetingHeaderText, greetingMessage, extraInputs, message, fontSize, formError, firstNameError, lastNameError, passwordError;
        
        // change display of form depending on formType
        switch (this.state.formType) {
            case "Get Started":
                imageSrc = window.logo;
                alt = "session icon";
                greetingHeaderText = "Let's get started";
                greetingMessage = "Enter your email to get started.";
                fontSize = "12px";
                message = "By continuing, I accept the Eventnite terms of service, community guidelines and have read the privacy policy."
                break;
            case "Log In":
                imageSrc = window.signinIcon;
                alt = "signin icon";
                greetingHeaderText = "Welcome Back";
                greetingMessage = "Please enter your password to log in.";
                message = "Forgot password";
                fontSize = "14px";
                formError = formErrors ? formErrors["Invalid"] : "";

                extraInputs = 
                    <StyledInput
                        className="password"
                        type="password" 
                        label="Password" 
                        onChange={this.handleChange("password")} 
                        value={password} 
                        error={formError} 
                    />
                break;
            case "Sign Up":
                imageSrc = window.signinIcon;
                alt = "signup icon";
                greetingHeaderText = "Welcome";
                greetingMessage = "Create an Account";
                message = "Log In Instead";
                fontSize = "14px";
                if (formErrors && formErrors["Fname"]) firstNameError = formErrors["Fname"];
                if (formErrors && formErrors["Lname"]) lastNameError = formErrors["Lname"];
                if (formErrors && formErrors["Password"]) passwordError = formErrors["Password"];
                extraInputs =
                    <div className="signup-div">
                        <StyledInput 
                            type="text" 
                            label="Confirm Password"
                            onChange={this.handleChange("confirmPassword")}
                            value={confirmPassword} 
                        />
                        <div className="first-last-name">
                            <StyledInput 
                                type="text" 
                                label="First Name" 
                                onChange={this.handleChange("fname")} 
                                value={fname} 
                                error={firstNameError}
                            />
                            <StyledInput 
                                type="text" 
                                label="Last Name" 
                                onChange={this.handleChange("lname")} 
                                value={lname} 
                                error={lastNameError}
                            />
                        </div>
                        <StyledInput 
                            type="password" 
                            label="Password" 
                            onChange={this.handleChange("password")} 
                            value={password} 
                            error={passwordError}
                        />
                    </div>;
                break;
        }

        return (
            <div className="session-form">
                <SessionGreeting
                    imageSrc={imageSrc}
                    alt={alt}
                    greetingHeaderText={greetingHeaderText}
                    greetingMessage={greetingMessage} 
                />

                <form onSubmit={this.handleSubmit}>
                    <StyledInput 
                        type={"text"} 
                        value={email} 
                        onChange={this.handleChange("email")} 
                        label="Email Address" 
                    />

                    {extraInputs}
                    <ButtonAndMessage 
                        type={"submit"}
                        value={formType}
                        message={message} 
                        fontSize={fontSize} 
                    />

                </form>
            </div>
        )
    }
}

export default SessionForm;