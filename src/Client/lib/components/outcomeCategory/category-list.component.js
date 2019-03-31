/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
import DataTable from '../commons/data-table';

const CategoryList = ({categories, onDelete}) => {
  // const categoriesRow = (category, index) => {
  //   return <tr key={index}>
  //     <td><Link to={`/category/${category.id}`}>{category.name}</Link></td>
  //     <td><input type="button" style={{width: '100px'}} value="Delete" onClick={ () => onDelete(category.id)}></input></td>      
  //   </tr>;
  // };
  const getDataTableData = (categoriesData) => {
    const tableData = {
      columnDefs: [{
        headerName: 'Name', field: 'name'
      },
      {
        headerName: 'Custom Action', field: 'customAction'
      }],
      rowData: [],
      // customRenders: {
      //   'customAction': (props) => {
      //     return <input type="button" style={{width: '100px'}} value="Delete" onClick={ () => onDelete(props.row.id)}></input>;
      //   }
      // }
    };
    for(let item of categoriesData) {
      let newRow = {
        id: item.id, name: item.name, customAction: 'customAction'
      };
      tableData.rowData.push(newRow);
    }
    return tableData;
  };
  return (
    <div>
      <DataTable data={getDataTableData(categories)}></DataTable>
    </div>
  );
};



CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default CategoryList;