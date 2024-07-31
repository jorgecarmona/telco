import React from 'react';
import {
  DataGrid as MuiDataGrid,
  DataGridProps as MuiDataGridProps,
  GridColDef,
} from '@mui/x-data-grid';

interface DataGridProps extends Omit<MuiDataGridProps, 'columns' | 'rows'> {
  columns: GridColDef[];
  disableColumnFilter: boolean;
  filterModel?: GridFilterModel;
  rows: Record<string, unknown>[];
  checkboxSelection?: boolean;
  disableColumnSorting?: boolean;
}

function DataGrid({ columns, rows, ...other }: DataGridProps) {
  return (
    <div style={{ height: 700 }}>
      <MuiDataGrid rows={rows} columns={columns} {...other} />
    </div>
  );
}

export default DataGrid;
