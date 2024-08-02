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

function DataGrid({ columns, rows, disableColumnFilter, disableColumnSorting, filterModel, pageSize = 5, pageSizeOptions = [], checkboxSelection = false, ...props}: DataGridProps) {
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
        <div style={{ width: '100%' }}>
            <MuiDataGrid 
                rows={rows} 
                columns={columns} 
                disableColumnFilter={disableColumnFilter}
                disableColumnSorting={disableColumnSorting}
                filterModel={filterModel}
                paginationModel={paginationModel}
                onPaginationModelChange={handlePaginationModelChange}
                pageSizeOptions={pageSizeOptions}
                checkboxSelection={checkboxSelection}
                sortModel={sortModel}
                onSortModelChange={handleSortModelChange}
                {...props}
            />
        </div>
    );
}

export default DataGrid;