import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import * as outcomeItemActions from '../../store/actions/outcomeItemActions';
import { bindActionCreators } from 'redux';
import OutcomeItemForm from './outcome-item-form.component';

class ManageOutcomeItemComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      outcomeItem: this.props.outcomeItem,
      categories: this.props.categories,
      errors: {}
    };

    this.onSave = this.onSave.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.updateOutcomeItemState = this.updateOutcomeItemState.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  outcomeItemsRow = (outcomeItem, index) => {
    return <p key={index}>{index}. {outcomeItem.Name}</p>;
  }

  onTitleChange = (event) => {
    const outcomeItem = this.state.outcomeItem;
    outcomeItem.Name = event.target.value;
    this.setState({ outcomeItem: outcomeItem });
  }

  onSave = (event) => {
    event.preventDefault();
    this.props.actions.saveOutcomeItem(this.state.outcomeItem);
    this.context.router.history.push('/outcomeItems');
  }
  
  updateOutcomeItemState = (event) => {
    return this.updateState(event.target.name, event.target.value);
  }

  onDatePickerChange = (fieldId, selectedDate) => {
    const utcDate = new Date(Date.UTC(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()));
    return this.updateState(fieldId, utcDate);
  }

  updateState(fieldId, value) {
    let outcomeItem = _.clone(this.state.outcomeItem);
    outcomeItem[fieldId] = value;
    return this.setState({outcomeItem});
  }

  render() {
    return (
      <div>
        <h2>Manage OutcomeItem</h2>
        <div>
          <OutcomeItemForm 
            categoryOptions={this.state.categories}
            outcomeItem={this.state.outcomeItem} 
            onSave={this.onSave} 
            onChange={this.updateOutcomeItemState}
            onDatePickerChange={this.onDatePickerChange} 
            errors={this.state.errors} />
        </div>
      </div>
    );
  }
}

ManageOutcomeItemComponent.propTypes = {
  actions: PropTypes.object.isRequired,
  outcomeItem: PropTypes.object.isRequired
};

ManageOutcomeItemComponent.contextTypes = {
  router: PropTypes.object
};

function getOutcomeItemById(outcomeItems, id) {
  const outcomeItem = outcomeItems.filter((outcomeItem)=>{
    return outcomeItem.id === +id;
  });
  if(outcomeItem) return outcomeItem[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const outcomeItemId = ownProps.match.params.id;
  let outcomeItem= { name: '' };
  if(outcomeItemId && state.outcomeItems.length) {
    outcomeItem = getOutcomeItemById(state.outcomeItems, outcomeItemId);
  }

  const categoriesFormattedForDropdown = state.categories.map((category)=>{
    return {
      value: category.id,
      text: category.name
    };
  });

  return {
    outcomeItem: outcomeItem,
    categories: categoriesFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(outcomeItemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageOutcomeItemComponent);