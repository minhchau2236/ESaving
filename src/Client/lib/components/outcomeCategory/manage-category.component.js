import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import * as categoryActions from '../../store/actions/outcomeCategoryActions';
import { bindActionCreators } from 'redux';
import TextInput from '../commons/text-Input';
import CategoryForm from './category-form.component';

class ManageCategoryComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      category: this.props.category,
      errors: {}
    };

    this.onSave = this.onSave.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.updateCategoryState = this.updateCategoryState.bind(this);
  }

  categoriesRow = (category, index) => {
    return <p key={index}>{index}. {category.Name}</p>;
  }

  onTitleChange = (event) => {
    const category = this.state.category;
    category.Name = event.target.value;
    this.setState({ category: category });
  }

  onSave = (event) => {
    event.preventDefault();
    this.props.actions.saveCategory(this.state.category);
    this.context.router.history.push('/categories');
  }
  
  updateCategoryState = (event) => {
    const fieldId = event.target.name;
    let category = _.clone(this.state.category);
    category[fieldId] = event.target.value;
    return this.setState({category});
  }

  render() {
    return (
      <div>
        <h2>Manage Category</h2>
        <div>
          <CategoryForm category={this.state.category} onSave={this.onSave} onChange={this.updateCategoryState} errors={this.state.errors} />
        </div>
      </div>
    );
  }
}

ManageCategoryComponent.propTypes = {
  actions: PropTypes.object.isRequired,
  category: PropTypes.object.isRequired
};

ManageCategoryComponent.contextTypes = {
  router: PropTypes.object
};

function getCategoryById(categories, id) {
  const category = categories.filter((category)=>{
    return category.id === +id;
  });
  if(category) return category[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const categoryId = ownProps.match.params.id;
  let category= { name: '' };
  if(categoryId && state.categories.length) {
    category = getCategoryById(state.categories, categoryId);
  }
  return {
    category: category,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(categoryActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCategoryComponent);