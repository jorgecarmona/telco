import React, { useState } from 'react';
import {
  DataGrid as MuiDataGrid,
  DataGridProps as MuiDataGridProps,
  GridSortModel,
  GridColDef,
} from '@mui/x-data-grid';

import { Box } from '@mui/material';

interface DataGridProps extends Omit<MuiDataGridProps, 'columns' | 'rows'> {
  columns: GridColDef[];
  rows: Record<string, unknown>[];
  checkboxSelection?: boolean;
  disableColumnSorting?: boolean;
}

function DataGrid({
  columns,
  rows,
  checkboxSelection = false,
  disableColumnSorting = false,
  ...other
}: DataGridProps) {
  const [sortModel, setSortModel] = useState<GridSortModel>([]);

  const handleSortModelChange = (model: GridSortModel) => {
    setSortModel(model);
  };

  return (
    <Box sx={{ height: 700, width: '100%' }}>
      <MuiDataGrid
        rows={rows}
        columns={columns.map((col) => ({
          ...col,
          sortable: !disableColumnSorting,
        }))}
        checkboxSelection={checkboxSelection}
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        {...other}
      />
    </Box>
  );
}

export default DataGrid;
