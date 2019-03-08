import React from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import PrescriptionForm from './Form';
import { getId } from '../../utils';
import { emptyArray } from '../../utils';
export default class PrescriptionShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patientId: null
    }
  }

  componentWillMount() {
    const id = getId(this.props);
    const patient_id = getId(this.props, 'patient_id');
    this.setState({patientId: patient_id})
    this.props.load('prescription', this.props.prescriptions, id, null, {type: 'patient', id: patient_id});
  }

  renderDrug() {
    if (this.props.prescription && this.props.prescription.prescription_drugs) {
      return (
        this.props.prescription.prescription_drugs.map((obj, index) => {
          if (!obj._destroy) {
            return (
              <tr>
                <th scope="col">{obj.drug_name}</th>
                <th scope="col">{obj.instruction}</th>
                <th scope="col">{obj.morning_before_food}</th>
                <th scope="col">{obj.morning_after_food}</th>
                <th scope="col">{obj.afternoon_before_food}</th>
                <th scope="col">{obj.afternoon_after_food}</th>
                <th scope="col">{obj.evening_before_food}</th>
                <th scope="col">{obj.evening_after_food}</th>
                <th scope="col">{obj.night_before_food}</th>
                <th scope="col">{obj.night_after_food}</th>
                <th scope="col">{obj.days}</th>
              </tr>
            );
          }else{
            return null
          }
        })
      );
    }
  }


  renderDetails(){
    if(this.props.prescription){
    return(
      <div>
        <div>
          <label>Date :</label> {this.props.prescription.date}
        </div>
        <div>
          <label>Complaint :</label> {this.props.prescription.complaints}
        </div>
        <div>
          <label>Finding :</label> {this.props.prescription.findings}
        </div>
        <div>
          <label>Instruction :</label> {this.props.prescription.instructions}
        </div>
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
            </tr>
            {this.renderDrug()}
          </tbody>
        </table>
        <div>
          <Button color="secondary" onClick={() => this.props.handleCancel('prescription', this.props.history, {type: 'patient', id: this.state.patientId})}>Cancel</Button>
        </div>
      </div>
    )
    }else{
      null
    }
  }


  render() {
    return (
      <React.Fragment>
        <div className="page-header d-flex justify-content-between align-items-center">
          <h2>Prescription Details</h2>
        </div>
        <div className="p-1">
          {this.renderDetails()}
        </div>
      </React.Fragment>
    )
  }
}
