import React, { useState } from 'react';
import {
  DataGrid as MuiDataGrid,
  DataGridProps as MuiDataGridProps,
  GridSortModel,
  GridColDef,
  GridPaginationModel,
} from '@mui/x-data-grid';
import { Box } from '@mui/material';

interface DataGridProps extends Omit<MuiDataGridProps, 'columns' | 'rows'> {
  columns: GridColDef[];
  rows: Record<string, unknown>[];
  pageSize?: number;
  pageSizeOptions?: number[];
  checkboxSelection?: boolean;
  disableColumnSorting?: boolean;
}

function DataGrid({
  columns,
  rows,
  pageSize = 5,
  pageSizeOptions = [5],
  checkboxSelection = false,
  disableColumnSorting = false,
  ...other
}: DataGridProps) {
  const [sortModel, setSortModel] = useState<GridSortModel>([]);
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    pageSize: pageSize,
    page: 0,
  });

  const handleSortModelChange = (model: GridSortModel) => {
    if (!disableColumnSorting) {
      setSortModel(model);
    }
  };

  const handlePaginationModelChange = (model: GridPaginationModel) => {
    setPaginationModel(model);
  };

  return (
    <Box sx={{ height: 700, width: '100%' }}>
      <MuiDataGrid
        rows={rows}
        columns={columns.map((col) => ({
          ...col,
          sortable: !disableColumnSorting,
        }))}
        paginationModel={paginationModel}
        onPaginationModelChange={handlePaginationModelChange}
        pageSizeOptions={pageSizeOptions}
        checkboxSelection={checkboxSelection}
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        {...other}
      />
    </Box>
  );
}

export default DataGrid;
