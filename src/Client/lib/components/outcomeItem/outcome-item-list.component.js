import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

const OutcomeItemList = ({outcomeItems, onDelete}) => {
  const outcomeItemsRow = (outcomeItem, index) => {
    return <tr key={index}>
      <td><Link to={`/outcomeItem/${outcomeItem.id}`}>{outcomeItem.name}</Link></td>
      <td><b>{outcomeItem.amount}</b></td>
      <td><b>{moment(outcomeItem.actionDate).format('DD/MM/YYYY')}</b></td>
      <td><input type="button" className="btn btn-danger" value="Delete" onClick={ () => onDelete(outcomeItem.id)}></input></td>      
    </tr>;
  };
  return (
    <div>
      <h2>Out come Item list</h2>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Amount</td>
            <td>Date</td>
            <td>Type</td>
          </tr>
        </thead>
        <tbody>
          {outcomeItems.map(outcomeItemsRow)}
        </tbody>
      </table>
   
      <div>
        {/* <input type="text" onChange={this.onTitleChange} value={this.state.outcomeItem.title}></input> */}
      </div>
    </div>
  );
};

OutcomeItemList.propTypes = {
  outcomeItems: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default OutcomeItemList;