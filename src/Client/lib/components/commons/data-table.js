import React from 'react';
import { PropTypes } from 'prop-types';
import { AgGridReact } from 'ag-grid-react';
// import '../../../node_modules/ag-grid-community/dist/styles/ag-grid.css';
// import '../../../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css';

const DataTable = ({data}) => {
  const RowRenderer = ({ renderBaseRow, ...props }) => {
    const isNormal = !data.customRenders || !Object.keys(data.customRenders).includes(props.cellMetaData.rowKey);
    return isNormal ? renderBaseRow(props) : data.customRenders[props.cellMetaData.rowKey](props);
  };
  return (
    <AgGridReact
      columnDefs={data.columnDefs}
      rowData={data.rowData}>
    </AgGridReact>
    // <ReactDataGrid
    //   columns={data.columns}
    //   rowGetter={(i) => data.rows[i]} 
    //   rowsCount={data.rows.length}
    //   rowRenderer={RowRenderer}
    //   minHeight={150} />
  );
};

DataTable.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DataTable;

