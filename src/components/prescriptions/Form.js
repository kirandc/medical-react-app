import React from 'react';
import {Button, FormGroup} from 'reactstrap';
import PropTypes from 'prop-types';
import {Form} from 'react-redux-form';
import TextField from '../core/TextField/TextField';
import SelectField from '../core/SelectField/SelectField';
import { isRequired } from '../validationHelper';
import { GENDER } from '../../Constants';
import { emptyArray } from '../../utils';
import _ from 'lodash';

export default class PrescriptionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prescription_drug: {
        drug_name: '', instruction: '', morning_before_food: '', morning_after_food: '', afternoon_before_food: '', afternoon_after_food: '', evening_before_food: '', evening_after_food: '', night_before_food: '', night_after_food: '', days: ''
      },
      prescription_drugs: []
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.addMore = this.addMore.bind(this);
    this.removeLink = this.removeLink.bind(this);
  }

  onSubmit(model, params) {
    let updatedParams = {};
    updatedParams = _.omit(params, 'prescription_drugs');
    updatedParams.prescription_drugs_attributes = params.prescription_drugs;
    this.props.submit(model, updatedParams, false, {type: 'patients', id: this.props.patientId}).then(this.onSuccess).catch(err => console.log(`There was an error:${err}`));
  }

   onSuccess() {
    this.props.fetch('prescription');
  }

  removeLink(index) {
    let result = true
    const array = Object.assign([], this.props.prescription.prescription_drugs);
    const removeobj = { ...array[index], ...{ _destroy: true } };
    array.splice(index, 1, removeobj);
    this.props.removeObject(`deep.prescription.prescription_drugs`, array);
  }

  addMore() {
    this.props.addObject(`deep.prescription.prescription_drugs`, this.state.prescription_drug);
  }

  renderDrug() {
    if (this.props.prescription) {
      if (emptyArray(this.props.prescription.prescription_drugs)) {
        this.addMore(this.state.prescription_drug);
      }
      return (
        this.props.prescription.prescription_drugs.map((obj, index) => {
          if (!obj._destroy) {
            return (
              <tr>
                <th scope="col">
                  <TextField model={`.prescription_drugs[${index}].drug_name`} label='' validators={{ isRequired }}/>
                </th>
                <th scope="col">
                  <TextField model={`.prescription_drugs[${index}].instruction`} label=''/>
                </th>
                <th scope="col">
                  <TextField model={`.prescription_drugs[${index}].morning_before_food`} label=''/>
                </th>
                <th scope="col">
                  <TextField model={`.prescription_drugs[${index}].morning_after_food`} label=''/>
                </th>
                <th scope="col">
                  <TextField model={`.prescription_drugs[${index}].afternoon_before_food`} label=''/>
                </th>
                <th scope="col">
                  <TextField model={`.prescription_drugs[${index}].afternoon_after_food`} label=''/>
                </th>
                <th scope="col">
                  <TextField model={`.prescription_drugs[${index}].evening_before_food`} label=''/>
                </th>
                <th scope="col">
                  <TextField model={`.prescription_drugs[${index}].evening_after_food`} label=''/>
                </th>
                <th scope="col">
                  <TextField model={`.prescription_drugs[${index}].night_before_food`} label=''/>
                </th>
                <th scope="col">
                  <TextField model={`.prescription_drugs[${index}].night_after_food`} label=''/>
                </th>
                <th scope="col">
                  <TextField model={`.prescription_drugs[${index}].days`} label=''/>
                </th>
                <th scope="col">
                  <Button onClick={() => this.removeLink(index)} color="danger">
                    <i className="fa fa-trash" />
                  </Button>
                </th>
              </tr>
            );
          }else{
            return null
          }
        })
      );
    }
  }

  render() {
    return (
      <Form
        model="deep.prescription"
        onSubmit={prescription => this.onSubmit('prescription', prescription)}>
        <div className="form-row">
          <FormGroup className="col-4">
            <TextField model=".complaints" label="Complaint" validators={{ isRequired }} />
          </FormGroup>

          <FormGroup className="col-4">
            <TextField model=".findings" label="Finding" />
          </FormGroup>

          <FormGroup className="col-4">
            <TextField model=".instructions" label="Instruction"/>
          </FormGroup>
        </div>
        <div className="form-row">
          <table class="table table-striped table-bordered">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Drug</th>
                <th scope="col"></th>
                <th class="text-center" colspan="2">Morning</th>
                <th class="text-center" colspan="2">Afternoon</th>
                <th class="text-center" colspan="2">Evening</th>
                <th class="text-center" colspan="2">Night</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Instruction</th>
                <th scope="col">Before</th>
                <th scope="col">After</th>
                <th scope="col">Before</th>
                <th scope="col">After</th>
                <th scope="col">Before</th>
                <th scope="col">After</th>
                <th scope="col">Before</th>
                <th scope="col">After</th>
                <th scope="col">Days</th>
                <th></th>
              </tr>
              {this.renderDrug()}
            </tbody>
          </table>
          <div className="form-group action-group">
              <Button onClick={() => this.addMore()} color="primary">
                <i className="fa fa-plus " /> Add
              </Button>
            </div>
        </div>
        <div className="form-row">
          <Button type="submit" color="primary">Save</Button>
          <Button color="secondary" onClick={() => this.props.handleCancel('prescription', this.props.history, {type: 'patient', id: this.props.patientId})}>Cancel</Button>
          </div>
      </Form>
    )
  }
}
