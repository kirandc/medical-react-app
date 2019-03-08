import React from "react";
import {Link} from 'react-router-dom';
import { emptyArray } from '../../utils';
import BootstrapTable from 'react-bootstrap-table-next';
import { getId } from '../../utils';


class Index extends React.Component  {
  constructor(props) {
    super(props);
    this.actionButton = this.actionButton.bind(this);
    this.state = {
      patientId: null
    }
  }

  componentDidMount() {
    const id = getId(this.props);
    this.setState({patientId: id})
    if(emptyArray(this.props.prescription)){
      this.props.fetch('prescription', null, {type: 'patients', id: id})
    }
  }

  actionButton (url, row) {
    return (<Link to={`/patients/${this.state.patientId}/prescriptions/${row.id}`} color="primary" size="sm" className=""><i className="fa fa-sticky-note"></i></Link>)
  }

  render(){
    const columns = [
    {
      dataField: 'date',
      text: 'Date',
      sort: true
    },{
      dataField: 'complaints',
      text: 'Complaint',
      sort: true,
    }, {
      dataField: 'findings',
      text: 'Finding',
      sort: true
    }, {
      dataField: 'instructions',
      text: 'Instruction',
      sort: true
    },{
      dataField: 'action',
      text: '',
      formatter: this.actionButton
    }];


    return (
      <React.Fragment>
        <div className="page-header d-flex justify-content-between align-items-center">

          <h2>Prescription</h2> <Link to={`/patients/${this.state.patientId}/prescriptions/new`} color="primary" size="sm" className="">New Prescription</Link>
        </div>
        <div className="p-1">
          { this.props.prescriptions &&
            <BootstrapTable keyField='id'
            data={ this.props.prescriptions }
            columns={ columns }
            hover
            bordered={ false }
          />
          }
        </div>
      </React.Fragment>
    )
  }
}

export default Index;
