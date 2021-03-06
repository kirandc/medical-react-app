import { connect } from 'react-redux';
import PatientIndex from '../../components/patients/Index';
import dispatchHelper from '../dispatchHelpers/index';

const mapStateToProps = (state, ownProps) => ({
  patients: state.commonReducer.patients,
});

const mapDispatchToProps = dispatch => dispatchHelper(dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(PatientIndex);
