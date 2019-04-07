import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

const OutcomeItemList = ({outcomeItems, selectedOutcome, onDelete}) => {
  const outcomeItemsRow = (outcomeItem, index) => {
    return <tr key={index}>
      <td><Link to={`/outcomeItem/outcome/${outcomeItem.outcomeId}/${outcomeItem.id}`}>{outcomeItem.name}</Link></td>
      <td><b>{outcomeItem.amount}</b></td>
      <td><span>{outcomeItem.description}</span></td>
      <td><span>{outcomeItem.OutcomeCategory ? outcomeItem.OutcomeCategory.name : ''}</span></td>
      <td><input type="button" className="btn btn-danger" value="Delete" onClick={ () => onDelete(outcomeItem.id)}></input></td>      
    </tr>;
  };
  return (
    <div>
      <h2>Out come Item list</h2>
      <h3>Outcome: {selectedOutcome.name}: {moment(selectedOutcome.actionDate).format('DD/MM/YYYY')}</h3>
      <table className="table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Amount</td>        
            <td>Description</td>
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
  selectedOutcome: PropTypes.array,
  onDelete: PropTypes.func.isRequired
};

export default OutcomeItemList;