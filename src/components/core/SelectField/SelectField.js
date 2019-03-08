import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Control, Errors } from 'react-redux-form';

//import './SelectField.css';

/**
* SelectField.
*/
class SelectField extends PureComponent {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
  }

  renderOptions() {
    let { options } = this.props;
    options = _.sortBy(options, ['name']);

    return (
      options.map(d =>
        <option key={d.id} value={d.id}>{ d.name }</option>,
      )
    );
  }

  render() {
    const { model, validators } = this.props;

    return (
      <div className="padding__right--sm margin__bottom--md">
        <label className="form-label">{ this.props.label }:</label>
        <Control.select
          model={model}
          disabled={this.props.disabled}
          className="form-control"
          validators={validators}
          onChange={e => this.handleClick(e)}
        >
          <option value="">--Select---</option>
          { this.renderOptions() }
        </Control.select>
        <Errors
          wrapper="div"
          className="error-block text-danger"
          show={{ touched: true, focus: false }}
          model={this.props.model}
          messages={{
            isRequired: 'can`t be blank',
            promotionableTypeValidation: 'can`t be applied to more than one mart',
          }}
        />
      </div>
    );
  }
}

SelectField.propTypes = {
  options: PropTypes.array.isRequired,
  model: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  validators: PropTypes.object,
};

SelectField.defaultProps = {
  validators: {},
  disabled: false,
};

export default SelectField;
