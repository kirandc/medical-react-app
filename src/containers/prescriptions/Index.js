import { connect } from 'react-redux';
import PrescriptionIndex from '../../components/prescriptions/Index';
import dispatchHelper from '../dispatchHelpers/index';

const mapStateToProps = (state, ownProps) => ({
  prescriptions: state.commonReducer.prescriptions,
});

const mapDispatchToProps = dispatch => dispatchHelper(dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(PrescriptionIndex);
