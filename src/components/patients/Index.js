import React from "react";
import {Link} from 'react-router-dom';
import { emptyArray } from '../../utils';
import BootstrapTable from 'react-bootstrap-table-next';
import SearchInput, {createFilter} from 'react-search-input'

const KEYS_TO_FILTERS = ['user.name', 'user.email', 'user.mobile', 'user.gender']

class Index extends React.Component  {
  constructor(props) {
    super(props);
    this.actionButton = this.actionButton.bind(this);
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }

  componentDidMount() {
    if(emptyArray(this.props.patient)){
      this.props.fetch('patient')
    }
  }

  actionButton (url, row) {
    return (<Link to={`/patients/${row.id}`} color="primary" size="sm" className=""><i className="fa fa-sticky-note"></i></Link>)
  }

  searchUpdated (term) {
    this.setState({searchTerm: term})
  }

  render() {
    const columns = [{
      dataField: 'user.name',
      text: 'Name',
      sort: true,
    }, {
      dataField: 'user.email',
      text: 'Email',
      sort: true
    }, {
      dataField: 'user.mobile',
      text: 'Mobile',
      sort: true
    },{
      dataField: 'user.gender',
      text: 'Gender',
      sort: true
    },{
      dataField: 'past_history',
      text: 'Past History',
      sort: true
    },{
      dataField: 'allergy',
      text: 'Allergy',
      sort: true
    },{
      dataField: 'family_history',
      text: 'Family History',
      sort: true
    },{
      dataField: 'notes',
      text: 'Note',
      sort: true
    },{
      dataField: 'action',
      text: '',
      formatter: this.actionButton
    }];

    const filteredUsers = this.props.patients.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
      <React.Fragment>
        <div className="page-header d-flex justify-content-between align-items-center">

          <h2>Patient</h2> <Link to="/patients/new" color="primary" size="sm" className="">New Patient</Link>
        </div>
        <div className="p-1">
         <SearchInput className="search-input" onChange={this.searchUpdated} />
          <BootstrapTable keyField='id'
            data={ filteredUsers }
            columns={ columns }
            hover
            bordered={ false }
          />
        </div>
      </React.Fragment>
    )
  }
}

export default Index;
