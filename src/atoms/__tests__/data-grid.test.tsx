import { render, screen } from '@testing-library/react';

import { GridColDef } from '@mui/x-data-grid';

import DataGrid from '../data-grid';

    const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'firstName', headerName: 'First name', width: 150 },
    { field: 'lastName', headerName: 'Last name', width: 150 },
    { field: 'age', headerName: 'Age', type: 'number', width: 110 },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
];

describe('DataGrid', () => {
    it('renders DataGrid with provided columns and rows', () => {
        render(
            <DataGrid 
                columns={columns} 
                rows={rows} 
                disableColumnFilter={false} 
                filterModel={{ items: [] }} 
        />
    );

        columns.forEach(column => {
            if (column.headerName) {
                expect(screen.getByText(column.headerName)).toBeInTheDocument();
            }
        });   

        rows.forEach(row => {
                const rowElement = screen.getByRole('row', { name: new RegExp(`${row.firstName}.*${row.lastName}.*${row.age}`) });
                expect(rowElement).toBeInTheDocument();
            });
        });
});
