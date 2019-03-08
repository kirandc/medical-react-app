import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PatientCreate from '../../components/patients/Create';
import dispatchHelper from '../dispatchHelpers/index';

export const mapStateToProps = (state, ownProps) => ({
  patient: state.deep.patient,
  patients: state.commonReducer.patients
});

const mapDispatchToProps = dispatch => dispatchHelper(dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PatientCreate));

