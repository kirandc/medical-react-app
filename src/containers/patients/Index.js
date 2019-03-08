import { connect } from 'react-redux';
import PatientIndex from '../../components/patients/Index';
import dispatchHelper from '../dispatchHelpers/index';

const mapStateToProps = (state, ownProps) => ({
  patients: state.commonReducer.patients,
  total_count: state.commonReducer.total_count
});

const mapDispatchToProps = dispatch => dispatchHelper(dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(PatientIndex);
