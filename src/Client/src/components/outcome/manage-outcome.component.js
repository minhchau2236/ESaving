import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import * as outcomeActions from '../../store/actions/outcomeActions';
import { bindActionCreators } from 'redux';
import OutcomeForm from './outcome-form.component';

class ManageOutcomeComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      outcome: this.props.outcome,
      categories: this.props.categories,
      errors: {}
    };

    this.onSave = this.onSave.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.updateOutcomeState = this.updateOutcomeState.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  outcomesRow = (outcome, index) => {
    return <p key={index}>{index}. {outcome.Name}</p>;
  }

  onTitleChange = (event) => {
    const outcome = this.state.outcome;
    outcome.Name = event.target.value;
    this.setState({ outcome: outcome });
  }

  onSave = (event) => {
    event.preventDefault();
    this.props.actions.saveOutcome(this.state.outcome);
    this.context.router.history.push('/outcomes');
  }
  
  updateOutcomeState = (event) => {
    return this.updateState(event.target.name, event.target.value);
  }

  onDatePickerChange = (fieldId, selectedDate) => {
    const utcDate = new Date(Date.UTC(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()));
    return this.updateState(fieldId, utcDate);
  }

  updateState(fieldId, value) {
    let outcome = _.clone(this.state.outcome);
    outcome[fieldId] = value;
    return this.setState({outcome});
  }

  render() {
    return (
      <div>
        <h2>Manage Outcome</h2>
        <div>
          <OutcomeForm 
            outcome={this.state.outcome} 
            onSave={this.onSave} 
            onChange={this.updateOutcomeState}
            onDatePickerChange={this.onDatePickerChange} 
            errors={this.state.errors} />
        </div>
      </div>
    );
  }
}

ManageOutcomeComponent.propTypes = {
  actions: PropTypes.object.isRequired,
  outcome: PropTypes.object.isRequired
};

ManageOutcomeComponent.contextTypes = {
  router: PropTypes.object
};

function getOutcomeById(outcomes, id) {
  const outcome = outcomes.filter((outcome)=>{
    return outcome.id === +id;
  });
  if(outcome) return outcome[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const outcomeId = ownProps.match.params.id;
  let outcome= { name: '' };
  if(outcomeId && state.outcome.outcomes.length) {
    outcome = getOutcomeById(state.outcome.outcomes, outcomeId);
  }

  return {
    outcome: outcome
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(outcomeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageOutcomeComponent);