/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Row, Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardImg, CardImgOverlay, CardText, Badge, Button, TabContent, TabPane, Nav, NavItem, NavLink as NavLinkRs, FormGroup,
  Label,
  CustomInput
} from "reactstrap";
import DataTable from "./../../../../components/commons/data-table";
import IntlMessages from "Util/IntlMessages";

const CategoryList = ({ categories, onEdit, onDelete }) => {
  const editFunction = (original) => {
    onEdit(original);
  }
  const deleteFunction = (id) => {
    onDelete(id);
  }
  const getDataTableData = (categoriesData) => {
    const columns = [{
      Header: 'Id',
      accessor: 'id' // String-based value accessors!
    }, {
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Description',
      accessor: 'description' // String-based value accessors!
    }, {
      Header: 'Action',
      accessor: 'id',
      Cell: row => (
        <div>
          <Button color="info" onClick={editFunction.bind(null, row.original)}>
            <IntlMessages id="action.edit" />
          </Button>
          <Button color="danger" onClick={deleteFunction.bind(null, row.value)}>
            <IntlMessages id="action.delete" />
          </Button>
        </div>
      )
    }];
    return {
      data: categoriesData,
      columns
    };
  };
  const tableData = getDataTableData(categories);
  return (
    <div className="outcome-category">
      <DataTable data={tableData.data} columns={tableData.columns}> </DataTable>
    </div>
  );
};

// CategoryList.propTypes = {
//   categories: PropTypes.array.isRequired,
//   onDelete: PropTypes.func.isRequired
// };

export default CategoryList;