import React from 'react';
import { DataGrid as MuiDataGrid, GridColDef, GridFilterModel} from '@mui/x-data-grid';

interface DataGridProps {
  columns: GridColDef[];
  rows: Record<string, unknown>[];
  disableColumnFilter: boolean;
  filterModel?: GridFilterModel;
}

function DataGrid({ columns, rows, disableColumnFilter, filterModel, ...other}: DataGridProps) {

  return (
    <div style={{ height: 600, width: '100%' }}>
      <MuiDataGrid 
        rows={rows} 
        columns={columns} 
        disableColumnFilter={disableColumnFilter}
        filterModel={filterModel}
        {...other}
      />
    </div>
  );
}

export default DataGrid;