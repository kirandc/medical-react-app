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
