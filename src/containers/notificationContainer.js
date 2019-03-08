import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionType from './../actions/types';
import './notificationContainer.css';

class NotificationContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      notificationVisible: true,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.notification.text) {
      this.setState({ notificationVisible: true });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.refs.showingNotification) {
      setTimeout(() => {
        this.props.removeAlert();
        this.setState({
          notificationVisible: false,
        });
      }, 5000);
    }
  }

  handleClick() {
    this.props.removeAlert();
  }

  render() {
    const { notification } = this.props;
    if (notification.text) {
      let className;
      if (this.state.notificationVisible) {
        className = `message message--${notification.style} notification-shown`;
      } else {
        className = 'notification-hidden';
      }
      return (
        <div className="notification-wrapper">
          <div className={className} onClick={this.handleClick.bind(this)} ref="showingNotification">
            <p>{notification.text}</p>
          </div>
        </div>
      );
    }
    return null;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    notification: state.notificationReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeAlert() {
      dispatch({ type: actionType.REMOVE_ALERT });
    },
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotificationContainer));
