import React, { useState } from 'react';
import {
  DataGrid,
  GridSortModel,
  GridColDef,
  GridPaginationModel,
} from '@mui/x-data-grid';
import { Box } from '@mui/material';

interface SortingProps {
  rows: any[];
  columns: GridColDef[];
  pageSize?: number;
  pageSizeOptions?: number[];
  checkboxSelection?: boolean;
}

function Sorting(props: SortingProps) {
  const {
    rows,
    columns,
    pageSize = 5,
    pageSizeOptions = [5],
    checkboxSelection = false,
    ...rest
  } = props;
  const [sortModel, setSortModel] = useState<GridSortModel>([]);
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    pageSize: pageSize,
    page: 0,
  });

  const handleSortModelChange = (model: GridSortModel) => {
    setSortModel(model);
  };

  const handlePaginationModelChange = (model: GridPaginationModel) => {
    setPaginationModel(model);
  };

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        paginationModel={paginationModel}
        onPaginationModelChange={handlePaginationModelChange}
        pageSizeOptions={pageSizeOptions}
        checkboxSelection={checkboxSelection}
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        {...rest}
      />
    </Box>
  );
}

export default Sorting;
