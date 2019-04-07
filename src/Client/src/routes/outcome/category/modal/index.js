/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  FormGroup,
  Form,
  Label,
  Input
} from "reactstrap";
import IntlMessages from "Util/IntlMessages";

const CategoryModal = ({ category, modal, onChange, saveFuction, cancelFunction }) => {
  return (
    <Modal isOpen={modal} toggle={cancelFunction}>
      <ModalHeader toggle={cancelFunction}>
        <IntlMessages id="outcome.category" />
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup className="row">
            <Label for="name" className="col-form-label col-sm-2">
              <IntlMessages id="form-components.name" />
            </Label>
            <div className="col-sm-8">
              <Input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="category name"
                onChange={onChange}
                value={category.name}
              />
            </div>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={saveFuction}>
          <IntlMessages id="form-components.save" />
        </Button>
        <Button color="secondary" onClick={cancelFunction}>
          <IntlMessages id="form-components.cancel" />
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CategoryModal;
