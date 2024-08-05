import React, {useState} from 'react';

import { DataGrid as MuiDataGrid, DataGridProps as MuiDataGridProps, GridColDef, GridFilterModel, GridSortModel, GridPaginationModel} from '@mui/x-data-grid';

interface DataGridProps extends Omit<MuiDataGridProps, 'columns' | 'rows'> {
    checkboxSelection?: boolean;
    columns: GridColDef[];
    disableColumnFilter: boolean;
    disableColumnSorting: boolean;
    filterModel?: GridFilterModel;
    rows: Record<string, unknown>[];
    pageSize: number;
    pageSizeOptions?: number[];
}

function DataGrid({checkboxSelection = false, columns, disableColumnFilter, disableColumnSorting, filterModel, rows, pageSize = 5, pageSizeOptions = [],  ...props}: DataGridProps) {
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

    return(
        <div style={{ width: '100%' }}>
            <MuiDataGrid 
                columns={columns} 
                checkboxSelection={checkboxSelection}
                disableColumnFilter={disableColumnFilter}
                disableColumnSorting={disableColumnSorting}
                filterModel={filterModel}
                rows={rows} 
                onPaginationModelChange={handlePaginationModelChange}
                onSortModelChange={handleSortModelChange}
                paginationModel={paginationModel}
                pageSizeOptions={pageSizeOptions}
                sortModel={sortModel}
                {...props}
            />
        </div>
    );
}

export default DataGrid;