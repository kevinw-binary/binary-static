import React from 'react';

class TextField extends React.PureComponent {
    render() {
        return <input type='text' {...this.props} />;
    }
}

class FieldGroup extends React.PureComponent {
    render() {
        return (
            <fieldset>
                <TextField {...this.props} />
            </fieldset>
        );
    }
}

class InputField extends React.PureComponent {
    render() {
        return (
            <div className='input-field'>
                {this.props.label ?
                    <label htmlFor={this.props.name} className='input-label'>{this.props.label}</label>
                :
                undefined
                }
                <input
                    type={this.props.type}
                    name={this.props.name}
                    step={this.props.is_currency ? '0.01' : undefined}
                    className={this.props.class1 || undefined}
                    placeholder={this.props.placeholder || undefined}
                    disabled={this.props.is_disabled}
                    defaultValue={this.props.value}
                    onChange={this.props.onChange}
                    required={this.props.required || undefined}
                />
                {this.props.helper ?
                    <span className='input-helper'>{this.props.helper}</span>
                :
                  undefined
                }
            </div>
        );
    }

}

module.exports = {
    TextField,
    FieldGroup,
    InputField,
};
