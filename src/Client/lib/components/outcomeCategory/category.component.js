import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../../store/actions/outcomeCategoryActions';
import { bindActionCreators } from 'redux';
import CategoryList from './category-list.component';
import history from '../../services/history';

class CategoryComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      category: { name: '' }
    };

    // this.onTitleChange = this.onTitleChange.bind(this);
    // this.onDelete = this.onDelete.bind(this);
    // this.onCreate = this.onCreate.bind(this);
  }

  componentDidMount() {
    if(!this.props.categories || !this.props.categories.length) {
      this.props.actions.loadCategories();
    }
  }

  onTitleChange  = (event) => {
    const category = this.state.category;
    category.Name = event.target.value;
    this.setState({ category: category });
  }

  onDelete = (id) => {
    this.props.actions.deleteCategory(id);
  }

  onCreate = () => {
    history.push('/category');
  }

  render() {
    return (
      <div>
        <h2>Categories</h2>
        <input type="button" onClick={this.onCreate} value="Create"></input>
        <CategoryList categories={this.props.categories} onDelete={this.onDelete} />
        <div>
          {/* <input type="text" onChange={this.onTitleChange} value={this.state.category.title}></input> */}
          {/* <input type="submit" value="Save" onClick={this.onClickSave}></input> */}
        </div>
      </div>
    );
  }
}

CategoryComponent.propTypes = {
  actions: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  history: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    categories: state.categories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(categoryActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryComponent);