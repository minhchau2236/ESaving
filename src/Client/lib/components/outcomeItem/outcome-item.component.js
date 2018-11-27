import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as outcomeItemActions from '../../store/actions/outcomeItemActions';
import { bindActionCreators } from 'redux';
import OutcomeItemList from './outcome-item-list.component';
import history from '../../services/history';

class OutcomeItemComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      outcomeItem: { name: '' }
    };

    // this.onTitleChange = this.onTitleChange.bind(this);
    // this.onDelete = this.onDelete.bind(this);
    // this.onCreate = this.onCreate.bind(this);
  }

  componentDidMount() {
    if(!this.props.outcomeItems || !this.props.outcomeItems.length) {
      this.props.actions.loadOutcomeItems();
    }
  }

  onTitleChange  = (event) => {
    const outcomeItem = this.state.outcomeItem;
    outcomeItem.Name = event.target.value;
    this.setState({ outcomeItem: outcomeItem });
  }

  onDelete = (id) => {
    this.props.actions.deleteOutcomeItem(id);
  }

  onCreate = () => {
    history.push('/outcomeItem');
  }

  render() {
    return (
      <div>
        <h2>OutcomeItems</h2>
        <input type="button" className="btn btn-primary" onClick={this.onCreate} value="Create"></input>
        <OutcomeItemList outcomeItems={this.props.outcomeItems} onDelete={this.onDelete} />
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
    outcomeItems: state.outcomeItems,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(outcomeItemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OutcomeItemComponent);