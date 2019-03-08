import React from 'react';
import PatientForm from './Form';
import { emptyArray } from '../../utils';
export default class PatientCreate extends React.Component {

  componentWillMount() {
    this.props.reset('patient');
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-header d-flex justify-content-between align-items-center">
          <h2>New Patient</h2>
        </div>
        <div className="p-1">
        <PatientForm
          submit={this.props.submit}
          handleCancel={this.props.handleCancel}
          history={this.props.history}
        />
        </div>
      </React.Fragment>
    )
  }
}

