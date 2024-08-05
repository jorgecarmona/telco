import React, {useState} from 'react';

import { DataGrid as MuiDataGrid, DataGridProps as MuiDataGridProps, GridColDef, GridFilterModel, GridSortModel, GridPaginationModel} from '@mui/x-data-grid';

interface DataGridProps extends Omit<MuiDataGridProps, 'columns' | 'rows'> {
    checkboxSelection?: boolean;
    columns: GridColDef[];
    disableColumnFilter: boolean;
    disableColumnSorting: boolean;
    filterModel?: GridFilterModel;
    pageSize: number;
    pageSizeOptions?: number[];
    rows: Record<string, unknown>[];
}

function DataGrid({checkboxSelection = false, columns, disableColumnFilter, disableColumnSorting, filterModel, pageSize = 5, pageSizeOptions = [], rows, ...props}: DataGridProps) {
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
                onPaginationModelChange={handlePaginationModelChange}
                onSortModelChange={handleSortModelChange}
                paginationModel={paginationModel}
                pageSizeOptions={pageSizeOptions}
                rows={rows} 
                sortModel={sortModel}
                {...props}
            />
        </div>
    );
}

export default DataGrid;