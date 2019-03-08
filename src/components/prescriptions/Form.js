import React from 'react';
import {Button, FormGroup} from 'reactstrap';
import PropTypes from 'prop-types';
import {Form} from 'react-redux-form';
import TextField from '../core/TextField/TextField';
import SelectField from '../core/SelectField/SelectField';
import { isRequired } from '../validationHelper';
import { GENDER } from '../../Constants';
import _ from 'lodash';

export default class PrescriptionForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(model, params) {
    let updatedParams = {};
    updatedParams = _.omit(params, 'prescription_drug');
    updatedParams.user_attributes = params.user;
    this.props.submit(model, updatedParams, false, {type: 'patients', id: this.props.patientId}).then(this.onSuccess).catch(err => console.log(`There was an error:${err}`));
  }

   onSuccess() {
    this.props.fetch('prescription');
  }

  render() {
    return (
      <Form
        model="deep.prescription"
        onSubmit={prescription => this.onSubmit('prescription', prescription)}>
        <div className="form-row">
          <FormGroup className="col-6">
            <TextField model=".complaints" label="Complaint" validators={{ isRequired }} />
          </FormGroup>

          <FormGroup className="col-6">
            <TextField model=".findings" label="Finding" />
          </FormGroup>
        </div>
        <div className="form-row">
          <FormGroup className="col-6">
            <TextField model=".instructions" label="Instruction"/>
          </FormGroup>
        </div>
        <div className="form-row">
          <Button type="submit" color="primary">Save</Button>
          <Button color="secondary" onClick={() => this.props.handleCancel('prescription', this.props.history, {type: 'patient', id: this.props.patientId})}>Cancel</Button>
          </div>
      </Form>
    )
  }
}
