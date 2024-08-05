import { render, screen, waitFor } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

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
        disableColumnSorting={false}
        filterModel={{ items: [] }}
        pageSize={5}
      />,
    );

    columns.forEach((column) => {
      if (column.headerName) {
        expect(screen.getByText(column.headerName)).toBeInTheDocument();
      }
    });

    rows.forEach((row) => {
      const rowElement = screen.getByRole('row', {
        name: new RegExp(`${row.firstName}.*${row.lastName}.*${row.age}`),
      });
      expect(rowElement).toBeInTheDocument();
    });
  });

  it('sorts rows by column when header is clicked', async () => {
    render(
      <DataGrid
        columns={columns}
        rows={rows}
        disableColumnFilter={false}
        disableColumnSorting={false}
        filterModel={{ items: [] }}
        pageSize={5}
      />,
    );

    const firstNameHeader = screen.getByText('First name');
    userEvent.click(firstNameHeader);

    await waitFor(() => {
      const sortedRows = [...rows].sort((a, b) =>
        a.firstName.localeCompare(b.firstName),
      );

      sortedRows.forEach((row, index) => {
        const rowElement = screen.getAllByRole('row')[index + 1];
        expect(rowElement).toHaveTextContent(row.firstName);
      });
    });
  });
});
