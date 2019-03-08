import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PrescriptionCreate from '../../components/prescriptions/Create';
import dispatchHelper from '../dispatchHelpers/index';

export const mapStateToProps = (state, ownProps) => ({
  prescription: state.deep.prescription,
  prescriptions: state.commonReducer.prescriptions
});

const mapDispatchToProps = dispatch => dispatchHelper(dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PrescriptionCreate));

