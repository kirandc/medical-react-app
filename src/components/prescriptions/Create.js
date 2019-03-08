import React from 'react';
import PrescriptionForm from './Form';
import { emptyArray } from '../../utils';
import { getId } from '../../utils';
export default class PrescriptionCreate extends React.Component {

  componentWillMount() {
    this.props.reset('prescription');
    let patient_id = getId(this.props, 'patient_id');
    this.setState({patientId: patient_id})
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-header d-flex justify-content-between align-items-center">
          <h2>New Prescription</h2>
        </div>
        <div className="p-1">
        <PrescriptionForm
          submit={this.props.submit}
          handleCancel={this.props.handleCancel}
          history={this.props.history}
          patientId={this.state.patientId}
        />
        </div>
      </React.Fragment>
    )
  }
}

