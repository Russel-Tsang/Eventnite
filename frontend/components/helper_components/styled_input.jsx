import React, { Component } from 'react';

class StyledInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            error: this.props.errors
        };
        this.handleChange = this.handleChange.bind(this);
    }

    label() {
        let inputClass, labelClass;
        if (this.props.error) {
            inputClass = 'input-error';
            labelClass = 'label-error'
        } else {
            inputClass = this.state.active ? "input-focus" : "";
            labelClass = this.state.active ? "label-focus" : "";
        }
        
        return (
            <div className={this.props.className}>
            <label className={`input-label ${labelClass}`}>{this.props.label}</label>
            <input
                type={this.props.type}
                className={inputClass}
                onFocus={this.handleChange}
                onBlur={this.handleChange}
                value={this.props.value}
                onChange={this.props.onChange}
            />
            </div>
        )
    }

    // toggles this.state.active change label style on input focus/blur
    handleChange() {
        if (!this.props.value) this.setState({ active: !this.state.active })
    }

    render() {
        let error = this.props.error ? <p className="error-message">{this.props.error}</p> : null;
        let marginBottom = this.props.error ? '15px' : '0px'; 
        return (
            <div className="styled-input" style={{ marginBottom }}>
                {this.label()}
                {error}
            </div>
        )
    }
}
    
 
export default StyledInput;