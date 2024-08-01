import { Meta,  StoryObj } from '@storybook/react';

import { GridColDef } from '@mui/x-data-grid';

import DataGrid from '../../atoms/data-grid';

const meta: Meta<typeof DataGrid> = {
    title: 'Atoms/DataGrid',
    component: DataGrid,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        disableColumnFilter: { control: 'boolean' },
        columns: { table: { disable: true } },
        rows: { table: { disable: true } },
        filterModel: { table: { disable: true } },
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
    ],
    disableColumnFilter: false,
    filterModel: { items: [] },
    },
};

export const WithoutFilter: Story = {
    args: {
        ...Default.args,
        disableColumnFilter: true,
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
    disableColumnFilter: false,
    filterModel: { items: [] },
    }
};