import React, { Component } from 'react';
import SessionGreeting from './session_greeting';
import { Link } from 'react-router-dom';

class SessionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
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
        let formErrors = errors.map((error, idx) => <ul key={idx}>{error}</ul>)
        return (
            <div className="session-form">
                {/* <img className="logo_orange" src={"assets/logo_orange.png"}/> */}
                <SessionGreeting
                    imgSrc={"assets/logo_orange.png"}
                    alt={"signin icon"}
                    greetingHeaderText={"Let's get started"}
                    greetingMessage={"Use Facebook or email to get started."} />
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.email} onChange={this.handleChange("email")} placeholder="Email Address"/>
                    <input type="submit" value="Get Started" />
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