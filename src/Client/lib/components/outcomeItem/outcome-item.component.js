import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as outcomeItemActions from '../../store/actions/outcomeItemActions';
import * as outcomeActions from '../../store/actions/outcomeActions';
import { bindActionCreators } from 'redux';
import OutcomeItemList from './outcome-item-list.component';
import history from '../../services/history';
import { getSelectedOutcome } from '../../store/selectors';

class OutcomeItemComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      outcomeItem: { name: '' }
    };
  }

  componentDidMount() {
    if(!this.props.outcomeId) {
      this.props.actions.loadOutcomeItems();
    } else {
      this.props.actions.loadOutcomeItemsByOutcomeId(this.props.outcomeId);
    }
    if(!this.props.selectedOutcome) {
      this.props.outcomeActions.getOutcomeById(this.props.outcomeId);
    }
  }

  onTitleChange  = (event) => {
    const outcomeItem = this.state.outcomeItem;
    outcomeItem.Name = event.target.value;
    this.setState({ outcomeItem: outcomeItem });
  }

  onDelete = (id) => {
    let confirmResult = confirm('Do you really want to delete this item?');
    if(confirmResult) {
      this.props.actions.deleteOutcomeItem(id);
    }
  }

  onCreate = () => {
    history.push(`/outcomeItem/outcome/${this.props.outcomeId}`);
  }

  render() {
    return (
      <div>
        <h2>OutcomeItems</h2>
        <input type="button" className="btn btn-primary" onClick={this.onCreate} value="Create"></input>
        <OutcomeItemList outcomeItems={this.props.outcomeItems} selectedOutcome={this.props.selectedOutcome} onDelete={this.onDelete} />
        <div>
          {/* <input type="text" onChange={this.onTitleChange} value={this.state.outcomeItem.title}></input> */}
          {/* <input type="submit" value="Save" onClick={this.onClickSave}></input> */}
        </div>
      </div>
    );
  }
}

OutcomeItemComponent.propTypes = {
  actions: PropTypes.object.isRequired,
  outcomeItems: PropTypes.array,
  history: PropTypes.object
};


function mapStateToProps(state, ownProps) {
  return {
    outcomeItems: state.outcomeItem.outcomeItems,
    selectedOutcome: getSelectedOutcome(state, ownProps.match.params),
    outcomeId: ownProps.match.params.outcomeId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(outcomeItemActions, dispatch),
    outcomeActions: bindActionCreators(outcomeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OutcomeItemComponent);