import React, {useState} from 'react';
import { DataGrid as MuiDataGrid, DataGridProps as MuiDataGridProps, GridColDef, GridPaginationModel} from '@mui/x-data-grid';

interface DataGridProps extends Omit<MuiDataGridProps, 'columns' | 'rows'> {
  columns: GridColDef[];
  rows: Record<string, unknown>[];
  pageSize?: number;
  pageSizeOptions?: number[];
}

function DataGrid({ columns, rows, pageSize = 0, pageSizeOptions = [], ...other}: DataGridProps) {
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    pageSize: pageSize,
    page: 0,
  });
  const handlePaginationModelChange = (model: GridPaginationModel) => {
    setPaginationModel(model);
  };
  return (
    <div style={{ height: 600, width: '100%' }}>
      <MuiDataGrid 
        rows={rows} 
        columns={columns} 
        paginationModel={paginationModel}
        onPaginationModelChange={handlePaginationModelChange}
        pageSizeOptions={pageSizeOptions}
        {...other}
      />
    </div>
  )
}

export default DataGrid;