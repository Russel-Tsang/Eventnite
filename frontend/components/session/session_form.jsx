import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
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
        let formErrors = errors.map((error, idx) => <ul key={idx}>{error}</ul>)
        let addressUrl = formType === 'login' ? 'signup' : 'login';
        return (
            <div className="session-form">
                {/* <img className="logo_orange" src={"assets/logo_orange.png"}/> */}
                <img src={window.logo} alt="logo"/>
                <div className="session-form greeting">
                    <h2>Let's get started</h2>
                    <p>Use Facebook or email to get started.</p>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <h1>{formType}</h1>
                    <input type="text" value={this.state.email} onChange={this.handleChange("email")} />
                    <input type="text" value={this.state.password} onChange={this.handleChange("password")} />
                    <input type="submit" value={formType} />
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