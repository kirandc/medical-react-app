import { connect } from 'react-redux';
import PrescriptionShow from '../../components/prescriptions/Show';
import dispatchHelper from '../dispatchHelpers/index';

const mapStateToProps = (state, ownProps) => ({
  prescription: state.deep.prescription,
  prescriptions: state.commonReducer.prescriptions
});

const mapDispatchToProps = dispatch => dispatchHelper(dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(PrescriptionShow);

