import React, { useState } from 'react';

import {
  DataGrid as MuiDataGrid,
  DataGridProps as MuiDataGridProps,
  GridSortModel,
  GridColDef,
} from '@mui/x-data-grid';
import { Box } from '@mui/material';

interface DataGridProps extends Omit<MuiDataGridProps, 'columns' | 'rows'> {
  checkboxSelection?: boolean;
  columns: GridColDef[];
  disableColumnSorting?: boolean;
  rows: Record<string, unknown>[];
}

function DataGrid({
  checkboxSelection = false,
  columns,
  disableColumnSorting = false,
  rows,
  ...other
}: DataGridProps) {
  const [sortModel, setSortModel] = useState<GridSortModel>([]);

  const handleSortModelChange = (model: GridSortModel) => {
    setSortModel(model);
  };

  return (
    <Box sx={{ height: 700, width: '100%' }}>
      <MuiDataGrid
        checkboxSelection={checkboxSelection}
        columns={columns.map((col) => ({
          ...col,
          sortable: !disableColumnSorting,
        }))}
        onSortModelChange={handleSortModelChange}
        rows={rows}
        sortModel={sortModel}
        {...other}
      />
    </Box>
  );
}

export default DataGrid;
