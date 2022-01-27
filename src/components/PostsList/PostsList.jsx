import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import DeleteRenderer from './Renderers/DeleteRenderer';
import EditRenderer from './Renderers/EditRenderer';
import ViewRenderer from './Renderers/ViewRenderer';
import { connect } from 'react-redux';
import './style.css';

/**
 * React component to display grid of employees with max working duration
 * using Ag-grid lib,
 * @param {array of obj} data
 */
const PostsList = ({ data, postDeleted }) => {
  const components = {
    DeleteRenderer: DeleteRenderer,
    EditRenderer: EditRenderer,
    ViewRenderer: ViewRenderer,
  };
  const columnDefs = [
    {
      headerName: 'Title ',
      field: 'title',
      minWidth: 350,
    },
    {
      headerName: 'Description',
      field: 'body',
      minWidth: 550,
    },
    {
      headerName: ' ',
      cellRenderer: 'DeleteRenderer',
      maxWidth: 50,
      filter: false,
      sortable: false,
      cellStyle: { paddingLeft: 0, paddingRight: 0 },
    },
    {
      headerName: ' ',
      cellRenderer: 'EditRenderer',
      maxWidth: 50,
      filter: false,
      sortable: false,
      cellStyle: { paddingLeft: 0, paddingRight: 0 },
    },
    {
      headerName: ' ',
      cellRenderer: 'ViewRenderer',
      maxWidth: 50,
      filter: false,
      sortable: false,
      cellStyle: { paddingLeft: 0, paddingRight: 0 },
    },
  ];

  const defaultColDef = {
    editable: true,
    enableRowGroup: true,
    enablePivot: true,
    enableValue: true,
    sortable: true,
    resizable: true,
    groupable: true,
    filter: true,
    flex: 1,
  };

  return (
    <div className="ag-theme-alpine posts_grid">
      <AgGridReact
        rowData={data}
        columnDefs={columnDefs}
        frameworkComponents={components}
        defaultColDef={defaultColDef}
        rowGroupPanelShow={'always'}
        pagination={true}
        paginationPageSize={20}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    postDeleted: state.session.postDeleted,
  };
};

export default connect(mapStateToProps)(PostsList);
