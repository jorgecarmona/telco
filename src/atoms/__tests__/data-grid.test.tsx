import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import { GridColDef } from '@mui/x-data-grid';

import DataGrid from '../data-grid';

const columns: GridColDef[] = [
  { field: 'age', headerName: 'Age', type: 'number', width: 110 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
];

const rows = [
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
];

describe('DataGrid', () => {
  it('renders DataGrid with provided columns and rows', () => {
    render(
      <DataGrid
        columns={columns}
        disableColumnFilter={false}
        disableColumnSorting={false}
        filterModel={{ items: [] }}
        rows={rows}
      />,
    );

    columns.forEach((column) => {
      if (column.headerName) {
        expect(screen.getByText(column.headerName)).toBeInTheDocument();
      }
    });

    rows.forEach((row) => {
      const rowElement = screen.getByRole('row', {
        name: `${row.age} ${row.firstName} ${row.id} ${row.lastName}`,
      });
      expect(rowElement).toBeInTheDocument();
    });
  });

  it('sorts rows by first name in ascending alphabetical order when column header is clicked', () => {
    render(
      <DataGrid
        columns={columns}
        disableColumnFilter={false}
        disableColumnSorting={false}
        filterModel={{ items: [] }}
        rows={rows}
      />,
    );

    const firstNameHeader = screen.getByText('First name');
    userEvent.click(firstNameHeader);

    const sortedRows = [
      { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
      { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
      { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
      { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    ];

    sortedRows.forEach((row) => {
      const rowElement = screen.getByRole('row', {
        name: `${row.age} ${row.firstName} ${row.id} ${row.lastName}`,
      });
      expect(rowElement).toBeInTheDocument();
    });
  });
});
