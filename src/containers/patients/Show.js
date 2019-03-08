import { connect } from 'react-redux';
import PatientShow from '../../components/patients/Show';
import dispatchHelper from '../dispatchHelpers/index';

const mapStateToProps = (state, ownProps) => ({
  patient: state.deep.patient,
  patients: state.commonReducer.patients
});

const mapDispatchToProps = dispatch => dispatchHelper(dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(PatientShow);

