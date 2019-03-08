import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Control, Errors } from 'react-redux-form';

/**
* TextField.
*/
class TextField extends PureComponent {
  constructor(props) {
    super(props);

    this.renderTextField = this.renderTextField.bind(this);
    this.handleLabelDisplay = this.handleLabelDisplay.bind(this);
  }

  handleLabelDisplay() {
    if (this.props.label) {
      return (
        <label className="form-label">{ this.props.label }</label>
      );
    }
    return null;
  }

  renderErrors() {
    if (!this.props.servererrors) {
      return (
        <Errors
          wrapper="div"
          className="error-block text-danger"
          model={this.props.model}
          messages={{
            isEmail: 'invalid email',
            isRequired: "can't be blank",
            isInteger: 'should be a number',
          }}
        />
      );
    }
    return null;
  }

  renderTextField() {
    const newProps = { ...this.props };
    const wrapperClassName = newProps.wrapperClassName;
    delete newProps.wrapperClassName;
    delete newProps.textarea;

    if (this.props.textarea) {
      return (
        <Control.textarea
          cols="75"
          rows="5"
          mapProps={{
            className: ({ fieldValue }) => (fieldValue.focus
              ? `${wrapperClassName} form-control focused description`
              : `${wrapperClassName} form-control description`),
          }}
          {...newProps}
        />
      );
    }
    return (
      <Control.text
        mapProps={{
          className: ({ fieldValue }) => (fieldValue.focus
            ? `${wrapperClassName} form-control focused`
            : `${wrapperClassName} form-control`),
        }}
        {...newProps}
      />
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.handleLabelDisplay()}
        {this.renderTextField()}
        {this.renderErrors()}
      </React.Fragment>
    );
  }
}

TextField.propTypes = {
  label: PropTypes.node,
  textarea: PropTypes.bool,
  servererrors: PropTypes.string,
  wrapperClassName: PropTypes.string,
  model: PropTypes.string.isRequired,
};

TextField.defaultProps = {
  label: '',
  textarea: false,
  wrapperClassName: '',
};

export default TextField;
