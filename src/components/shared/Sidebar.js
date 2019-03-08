import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <aside className={`ss-app-sidebar open`}>
        <div className="sidebar-overlay" />
        <div className=" sidebar-inner d-flex flex-column justify-content-between">
          <h3> <div style={{color:'green'}}>Medical App </div></h3>
          <div className="sidebar-content">
            <ul className="sidebar-menu pl-0">
              <li>
                <Link to="/patients" className="d-flex align-items-center">
                  <span className="d-none ">Paitents</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </aside>
    );
  }
}
export default withRouter(Sidebar);
