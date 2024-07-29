import React from 'react';
import { DataGrid as MuiDataGrid, DataGridProps as MuiDataGridProps, GridColDef, GridFilterModel} from '@mui/x-data-grid';

interface DataGridProps extends Omit<MuiDataGridProps, 'columns' | 'rows'> {
  columns: GridColDef[];
  disableColumnFilter: boolean;
  filterModel?: GridFilterModel;
  rows: Record<string, unknown>[];
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
