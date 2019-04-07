import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import * as categoryActions from '../../../redux/outcome/category/actions';
import { bindActionCreators } from 'redux';
import IntlMessages from "Util/IntlMessages";
import { Row, Card, CardBody, CardTitle, Button, Jumbotron } from "reactstrap";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";

import CategoryList from './dataList';
import CategoModal from './modal';
import PromtDialog from "./../../../components/commons/promt-dialog";

class OutcomeCategoryComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.defaultCategory = {name: ''};
    this.state = {
      modal: false,
      category: this.defaultCategory
    };
    this.create = this.create.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.save = this.save.bind(this);
    this.edit = this.edit.bind(this);
    this.cancel = this.cancel.bind(this);
    this.delete = this.delete.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  componentDidMount() {
    if (!this.props.categories || !this.props.categories.length) {
      this.props.actions.loadCategories();
    }
  }

  toggleModal(value) {
    this.setState({
      modal: value || !this.state.modal
    });
  }

  create() {
    this.setState({
      category: this.defaultCategory
    })
    this.toggleModal(true);
  }

  edit(category) {
    this.setState({
      category: {
        ...category
      }
    });
    this.toggleModal(true);
  }

  delete(id) {
    this.promt.show({
      content: 'Want delete this item?',
      okAction: () => {
        this.props.actions.deleteCategory(id);
      }
    });
  }

  save() {
    this.toggleModal(false);
    this.props.actions.saveCategory(this.state.category);
  }

  cancel() {
    this.toggleModal(false);
  }

  handleFormChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState( {
      category: { ...this.state.category, [name]: value }
    });
  }

  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <BreadcrumbContainer
              heading={<IntlMessages id="menu.outcomeCategory" />}
              match={this.props.match}
            />
            <Separator className="mb-5" />
          </Colxx>
        </Row>
        <Row>
          <Colxx>
            <Card>
              <CardBody className="text-center">
                  <div className="clearfix mb-1">
                    <Button color="primary" className="float-right" onClick={this.create}>
                      <IntlMessages id="action.create" />
                    </Button>
                  </div>
                <CategoryList categories={this.props.categories} onEdit={this.edit} onDelete={this.delete}/>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
        <CategoModal modal={this.state.modal} category={this.state.category} saveFuction={this.save} cancelFunction={this.cancel} onChange={this.handleFormChange}/>
        <PromtDialog ref={(component) => { this.promt = component }}></PromtDialog>
      </Fragment>
    );
  }
}

// OutcomeCategoryComponent.propTypes = {
//   actions: PropTypes.object.isRequired,
//   categories: PropTypes.array.isRequired,
//   history: PropTypes.object
// };

function mapStateToProps({ outcome }) {
  return {
    categories: outcome.category.categories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(categoryActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OutcomeCategoryComponent);

