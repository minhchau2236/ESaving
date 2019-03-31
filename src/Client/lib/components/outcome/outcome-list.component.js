import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import DataTable from '../commons/data-table';

const OutcomeList = ({outcomes, onDelete, onEdit}) => {
  const outcomesRow = (outcome, index) => {
    return <tr key={index}>
      <td><Link to={`/outcome/${outcome.id}`}>{outcome.name}</Link></td>  
      <td><b>{moment(outcome.actionDate).format('DD/MM/YYYY')}</b></td>
      <td><span>{outcome.description}</span></td>     
      <td><input type="button" className="btn btn-danger" value="Delete" onClick={ () => onDelete(outcome.id)}></input>
        <input type="button" className="btn btn-primary" value="Detail" onClick={ () => onEdit(outcome.id)}></input>
      </td>         
    </tr>;
  };
  const getDataTableData = (dataList) => {
    const tableData = {
      columns: [{
        name: 'Name', key: 'name'
      },
      {
        name: 'Date', key: 'actionDate'
      },
      {
        name: 'Description', key: 'description'
      }],
      rows: []
    };
    for(let item of dataList) {
      let newRow = {
        ...item,
        actionDate: moment(item.actionDate).format('DD/MM/YYYY')
      };
      tableData.rows.push(newRow);
    }
    return tableData;
  };
  return (
    <div>
      <h2>Out come Item list</h2>
      <DataTable data={getDataTableData(outcomes)}></DataTable>
    </div>
  );
};

OutcomeList.propTypes = {
  outcomes: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default OutcomeList;