import React from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import PatientForm from './Form';
import { getId } from '../../utils';
import { emptyArray } from '../../utils';
export default class PatientShow extends React.Component {

  componentWillMount() {
    const id = getId(this.props);
    this.props.load('patient', this.props.patients, id);
  }

  renderDetails(){
    if(this.props.patient && this.props.patient.user){
    return(
      <div>
        <div>
          <label>Name :</label> {this.props.patient.user.name}
        </div>
        <div>
          <label>Mobile :</label> {this.props.patient.user.mobile}
        </div>
        <div>
          <label>Email :</label> {this.props.patient.user.email}
        </div>
        <div>
          <label>Gender :</label> {this.props.patient.user.gender}
        </div>
        <div>
          <label>Past History :</label> {this.props.patient.past_history}
        </div>
        <div>
          <label>Allergy :</label> {this.props.patient.allergy}
        </div>
        <div>
          <label>Family History :</label> {this.props.patient.family_history}
        </div>
        <div>
          <label>Notes :</label> {this.props.patient.notes}
        </div>
        <div>
          <Button color="secondary" onClick={() => this.props.handleCancel('patient', this.props.history)}>Cancel</Button>
          <Link to={`/patients/${this.props.patient.id}/prescriptions`} color="primary" size="sm" className="btn btn-primary">Presciptions</Link>
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
          <h2>Patient Details</h2>
        </div>
        <div className="p-1">
          {this.renderDetails()}
        </div>
      </React.Fragment>
    )
  }
}
