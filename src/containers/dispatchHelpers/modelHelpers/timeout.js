import { addAlert } from '../../../actionCreators/notificationActionCreators';

const Timeout = (error, dispatch, history) => {
  if (error.response.status === 401) {
    const msg = 'Session Timeout. Please login again to continue!';
    dispatch(addAlert(msg, 'error'));
    history.push('/');
  }
};

export default Timeout;
