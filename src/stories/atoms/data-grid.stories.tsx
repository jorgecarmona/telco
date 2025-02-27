import { Meta, StoryObj } from '@storybook/react';

import { GridColDef } from '@mui/x-data-grid';

import DataGrid from '../../atoms/data-grid';

const meta = {
  title: 'Atoms/DataGrid',
  component: DataGrid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: { table: { disable: true } },
    disableColumnFilter: { control: 'boolean' },
    disableColumnSorting: { control: 'boolean' },
    filterModel: { table: { disable: true } },
    rows: { table: { disable: true } },
    sortModel: { table: { disable: true } },
  },
  args: {
    checkboxSelection: false,
    pageSize: 5,
    pageSizeOptions: [5, 10, 20],
  },
} satisfies Meta<typeof DataGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'firstName', headerName: 'First name', width: 150 },
      { field: 'lastName', headerName: 'Last name', width: 150 },
      { field: 'age', headerName: 'Age', type: 'number', width: 110 },
    ] as GridColDef[],
    rows: [
      { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
      { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
      { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
      { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
      { id: 5, lastName: 'Garcia', firstName: 'Alejandra', age: 42 },
      { id: 6, lastName: 'Fonseca', firstName: 'Javier', age: 45 },
      { id: 7, lastName: 'Chacon', firstName: 'Daniela', age: 16 }
    ],
    checkboxSelection: false,
    disableColumnFilter: false,
    disableColumnSorting: false,
    pageSize: 5,
    pageSizeOptions: [5, 10, 20],
  },
};


export const WithoutFilter: Story = {
  args: {
    ...Default.args,
    disableColumnFilter: true,
  },
};

export const WithoutSorting: Story = {
  args: {
    ...Default.args,
    disableColumnSorting: true,
  },
};

export const Empty: Story = {
  args: {
    columns: [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'firstName', headerName: 'First name', width: 150 },
      { field: 'lastName', headerName: 'Last name', width: 150 },
      { field: 'age', headerName: 'Age', type: 'number', width: 110 },
    ] as GridColDef[],
    rows: [],
    checkboxSelection: false,
    disableColumnFilter: false,
    disableColumnSorting: false,
    pageSize: 5,
    pageSizeOptions: [5, 10, 20],
  },
};
