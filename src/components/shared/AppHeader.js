import React, { PureComponent } from 'react';
import './AppHeader.css';

class AppHeader extends PureComponent {
  componentDidMount() {
    document.title = this.props.pageTitle;
  }

  componentDidUpdate() {
    document.title = this.props.pageTitle;
  }

  render() {
    return (
      <span></span>
    );
  }
}

export default AppHeader;
