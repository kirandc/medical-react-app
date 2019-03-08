import React, { PureComponent } from 'react';
import { titleize } from '../utils';

import AppHeader from '../components/shared/AppHeader';

class AppLayoutContainer extends PureComponent {
  getTitle() {
    const string = this.props.match.path.split('/')[1];
    return titleize(string);
  }

  render() {
    this.getTitle();
    return (
      <section className="gm-content">
        <AppHeader pageTitle={this.getTitle()} />
        <div className="gm-page">
          { this.props.children }
        </div>
      </section>
    );
  }
}

export default AppLayoutContainer;
