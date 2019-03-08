import React, { PureComponent } from 'react';
import ReduxBlockUi from 'react-block-ui/redux';
import './appContainer.css';
import './blockUI.css';

import Sidebar from '../components/shared/Sidebar';
import NotificationContainer from './notificationContainer';

class AppContainer extends PureComponent {
  render() {
    return (
      <ReduxBlockUi tag="div" block="REQUEST_START" unblock="REQUEST_DONE" className="ss-app-main">
        <NotificationContainer/>
        <Sidebar/>
        <section className="ss-app-page">
          { this.props.children }
        </section>
      </ReduxBlockUi>
    );
  }
}

export default AppContainer;
