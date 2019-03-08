import React from 'react';
import {Button, FormGroup} from 'reactstrap';
import PropTypes from 'prop-types';
import {Form} from 'react-redux-form';
import TextField from '../core/TextField/TextField';
import SelectField from '../core/SelectField/SelectField';
import { isRequired, isEmail } from '../validationHelper';
import { GENDER } from '../../Constants';
import _ from 'lodash';

export default class PatientForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(model, params) {
    let updatedParams = {};
    updatedParams = _.omit(params, 'user');
    updatedParams.user_attributes = params.user;
    this.props.submit(model, updatedParams).then(this.onSuccess).catch(err => console.log(`There was an error:${err}`));
  }

   onSuccess() {
    this.props.fetch('patient');
  }

  render() {
    return (
      <Form
        model="deep.patient"
        onSubmit={patient => this.onSubmit('patient', patient)}>
        <div className="form-row">
          <FormGroup className="col-6">
            <TextField model=".user.name" label="Name" validators={{ isRequired }} />
          </FormGroup>

          <FormGroup className="col-6">
            <TextField model=".user.email" label="Email" validators={{ isRequired, isEmail }} />
          </FormGroup>
        </div>
        <div className="form-row">
          <FormGroup className="col-6">
            <TextField model=".user.mobile" label="Mobile" validators={{ isRequired }} />
          </FormGroup>
          <FormGroup className="col-6">
            <SelectField model=".user.gender" options={GENDER} label="Gender" validators={{ isRequired }} />
          </FormGroup>
        </div>
        <div className="form-row">
          <FormGroup className="col-6">
            <TextField model=".past_history" label="Past History" />
          </FormGroup>

          <FormGroup className="col-6">
            <TextField model=".allergy" label="Allergy" />
          </FormGroup>
        </div>
        <div className="form-row">
          <FormGroup className="col-6">
            <TextField model=".family_history" label="Family History" />
          </FormGroup>

          <FormGroup className="col-6">
            <TextField model=".notes" label="Notes" />
          </FormGroup>
        </div>
        <div className="form-row">
          <Button type="submit" color="primary">Save</Button>
          <Button color="secondary" onClick={() => this.props.handleCancel('patient', this.props.history)}>Cancel</Button>
          </div>
      </Form>
    )
  }
}
