/* eslint-disable react/display-name */
import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import IntlMessages from "Util/IntlMessages";

export default class PromtDialogComponent extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      content: this.props.content || 'Do you want to delete this item?',
      okAction: this.props.okAction,
      cancelAction: this.props.cancelAction
    }
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.clickOK = this.clickOK.bind(this);
    this.clickCancel = this.clickCancel.bind(this);
  }

  show(options) {
    this.setState({
      modal: true,
      ...options
    });
  }

  hide() {
    this.setState({
      modal: false
    });
  }

  clickOK() {
    this.hide();
    this.state.okAction();
  }

  clickCancel() {
    this.hide();
    this.state.cancelAction();
  }

  render() {
    return (
      <Modal isOpen={this.state.modal} toggle={this.clickCancel}>
        <ModalBody>
          <div>{this.props.content || 'Do you want to delete this item?'}</div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.clickOK}>
            <IntlMessages id="form-components.ok" />
          </Button>
          <Button color="secondary" onClick={this.clickCancel}>
            <IntlMessages id="form-components.cancel" />
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
};

PromtDialogComponent.propTypes = {
  content: PropTypes.string,
  onOk: PropTypes.func,
  onCancel: PropTypes.func
};
