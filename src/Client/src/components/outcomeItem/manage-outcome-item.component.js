import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import * as outcomeItemActions from '../../store/actions/outcomeItemActions';
import * as outcomeActions from '../../store/actions/outcomeActions';
import moment from 'moment';
import { bindActionCreators } from 'redux';
import OutcomeItemForm from './outcome-item-form.component';

class ManageOutcomeItemComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      outcomeItem: this.props.outcomeItem,
      categories: this.props.categories,
      selectedOutcome: this.props.selectedOutcome,
      errors: {}
    };

    this.onSave = this.onSave.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.updateOutcomeItemState = this.updateOutcomeItemState.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    //if (_.isEmpty(this.props.selectedOutcome)) {
      this.props.outcomeActions.getOutcomeById(this.props.outcomeId);
    // }
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
    const remoteSaveData = this.prepareRemoteData(this.state.outcomeItem);
    this.props.actions.saveOutcomeItem(remoteSaveData);
    this.context.router.history.push(`/outcomeItems/${this.props.outcomeId}`);
  }

  updateOutcomeItemState = (event) => {
    return this.updateState(event.target.name, event.target.value);
  }

  updateState(fieldId, value) {
    let outcomeItem = _.clone(this.state.outcomeItem);
    outcomeItem[fieldId] = value;
    return this.setState({ outcomeItem });
  }

  prepareRemoteData(outcomeItem) {
    return { ...outcomeItem, outcomeId: this.props.outcomeId };
  }

  render() {
    return (
      <div>
        {this.state.selectedOutcome &&
           <h3>{this.state.selectedOutcome.name} {moment(this.state.selectedOutcome.actionDate).format('DD/MM/YYYY')}</h3>
        }
        <OutcomeItemForm
          categoryOptions={this.state.categories}
          outcomeItem={this.state.outcomeItem}
          outcome={this.state.selectedOutcome}
          onSave={this.onSave}
          onChange={this.updateOutcomeItemState}
          errors={this.state.errors} />
      </div>
    );
  }
}

ManageOutcomeItemComponent.propTypes = {
  actions: PropTypes.object.isRequired,
  outcomeItem: PropTypes.object.isRequired,
  selectedOutcome: PropTypes.object
};

ManageOutcomeItemComponent.contextTypes = {
  router: PropTypes.object
};

function getOutcomeItemById(outcomeItems, id) {
  const outcomeItem = outcomeItems.filter((outcomeItem) => {
    return outcomeItem.id === +id;
  });
  if (outcomeItem) return outcomeItem[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const outcomeItemId = ownProps.match.params.id;
  const outcomeId = ownProps.match.params.outcomeId;
  let outcomeItem = { name: '' };
  let outome = state.outcome.selectedOutcome;
  if (outcomeItemId && state.outcomeItem.outcomeItems.length) {
    outcomeItem = getOutcomeItemById(state.outcomeItem.outcomeItems, outcomeItemId);
  }

  const categoriesFormattedForDropdown = state.category.categories.map((category) => {
    return {
      value: category.id,
      text: category.name
    };
  });

  return {
    outcomeItem: outcomeItem,
    selectedOutcome: outome,
    outcomeId: outcomeId,
    categories: categoriesFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(outcomeItemActions, dispatch),
    outcomeActions: bindActionCreators(outcomeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageOutcomeItemComponent);