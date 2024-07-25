import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Sorting from '../../atoms/sorting';
import { GridColDef } from '@mui/x-data-grid';

export default {
  title: 'Components/Sorting',
  component: Sorting,
} as Meta<typeof Sorting>;

const Template: StoryFn<typeof Sorting> = (args) => <Sorting {...args} />;

const columns: GridColDef[] = [
  { field: 'loan_id', headerName: 'Loan ID', width: 150 },
  { field: 'borrower_id', headerName: 'Borrower ID', width: 150 },
  { field: 'amount', headerName: 'Amount', width: 150 },
  { field: 'term', headerName: 'Term', width: 150 },
  { field: 'rate_annual', headerName: 'Rate Annual', width: 150 },
  { field: 'status', headerName: 'Status', width: 150 },
  { field: 'period_start_at', headerName: 'Period Start At', width: 200 },
  { field: 'period_end_at', headerName: 'Period End At', width: 200 },
  { field: 'principal', headerName: 'Principal', width: 150 },
  { field: 'interest', headerName: 'Interest', width: 150 },
  { field: 'service_fee_amount', headerName: 'Service Fee Amount', width: 150 },
  { field: 'service_fee_rate', headerName: 'Service Fee Rate', width: 150 },
];

const rows = [
  {
    id: 1,
    loan_id: '1',
    borrower_id: 'A1',
    amount: 1000,
    term: 12,
    rate_annual: 5,
    status: 'Active',
    period_start_at: '2022-01-01',
    period_end_at: '2023-01-01',
    principal: 1000,
    interest: 50,
    service_fee_amount: 10,
    service_fee_rate: 1,
  },
  {
    id: 2,
    loan_id: '2',
    borrower_id: 'A2',
    amount: 2000,
    term: 24,
    rate_annual: 4,
    status: 'Completed',
    period_start_at: '2021-01-01',
    period_end_at: '2023-01-01',
    principal: 2000,
    interest: 80,
    service_fee_amount: 20,
    service_fee_rate: 1.5,
  },
];

export const Default = Template.bind({});
Default.args = {
  rows,
  columns,
  pageSize: 5,
  pageSizeOptions: [5],
  checkboxSelection: true,
};
