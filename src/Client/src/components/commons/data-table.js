import React from 'react';
import { PropTypes } from 'prop-types';
import ReactTable from "react-table";
import 'react-table/react-table.css'
// import '../../../node_modules/ag-grid-community/dist/styles/ag-grid.css';
// import '../../../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css';

const DataTable = ({data, columns, options}) => {
  const defaultOptions = {
    defaultPageSize: 5
  }
  const tableOptions = {
    ...defaultOptions,
    ...options
  };
  return (
    <div>
     <ReactTable
      data={data}
      columns={columns}
      {...tableOptions}
    />
    </div>
    // <ReactDataGrid
    //   columns={data.columns}
    //   rowGetter={(i) => data.rows[i]} 
    //   rowsCount={data.rows.length}
    //   rowRenderer={RowRenderer}
    //   minHeight={150} />
  );
};


export default DataTable;

