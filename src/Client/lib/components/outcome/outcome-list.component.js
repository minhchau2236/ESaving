import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

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
  return (
    <div>
      <h2>Out come Item list</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <td>Name</td>
            <td>Date</td>
            <td>Description</td>
          </tr>
        </thead>
        <tbody>
          {outcomes.map(outcomesRow)}
        </tbody>
      </table>
   
      <div>
        {/* <input type="text" onChange={this.onTitleChange} value={this.state.outcome.title}></input> */}
      </div>
    </div>
  );
};

OutcomeList.propTypes = {
  outcomes: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default OutcomeList;