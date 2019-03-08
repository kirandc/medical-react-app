import React from 'react';
import { Link } from 'react-router-dom';
import { ROOT_URL } from '../Constants';

const PageNotFound = () => (
  <div className="container-scroller">
    <div className="container-fluid">
      <div className="row">
        <div className="content-wrapper full-page-wrapper d-flex align-items-center text-center error-page">
          <div className="col-lg-6 offset-lg-3">
            <h1 className="display-1">404</h1>
            <h2>The page you are looking for was not found!</h2>
            <Link to={ROOT_URL} className="btn btn-info mt-5">Back to home</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PageNotFound;
