import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as outcomeActions from '../../store/actions/outcomeActions';
import { bindActionCreators } from 'redux';
import OutcomeList from './outcome-list.component';
import history from '../../services/history';
import { getOutcomes } from '../../store/selectors';

class OutcomeComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      outcome: { name: '' }
    };

    // this.onTitleChange = this.onTitleChange.bind(this);
    // this.onDelete = this.onDelete.bind(this);
    // this.onCreate = this.onCreate.bind(this);
  }

  componentDidMount() {
    if(!this.props.outcomes || !this.props.outcomes.length) {
      this.props.actions.loadOutcomes();
    }
  }

  onTitleChange  = (event) => {
    const outcome = this.state.outcome;
    outcome.Name = event.target.value;
    this.setState({ outcome: outcome });
  }

  onDelete = (id) => {
    let confirmResult = confirm('Do you really want to delete this item?');
    if(confirmResult) {
      this.props.actions.deleteOutcome(id);
    }
  }

  onEdit = (id) => {
    history.push(`/outcomeItems/${id}`);
  }

  onCreate = () => {
    history.push('/outcome');
  }

  render() {
    return (
      <div>
        <h2>Outcomes</h2>
        <input type="button" className="btn btn-primary" onClick={this.onCreate} value="Create"></input>
        <OutcomeList outcomes={this.props.outcomes} onDelete={this.onDelete} onEdit={this.onEdit}/>
        <div>
          {/* <input type="text" onChange={this.onTitleChange} value={this.state.outcome.title}></input> */}
          {/* <input type="submit" value="Save" onClick={this.onClickSave}></input> */}
        </div>
      </div>
    );
  }
}

OutcomeComponent.propTypes = {
  actions: PropTypes.object.isRequired,
  outcomes: PropTypes.array,
  history: PropTypes.object
};


function mapStateToProps(state, ownProps) {
  return {
    outcomes: getOutcomes(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(outcomeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OutcomeComponent);