import React from 'react';
import { render } from '@testing-library/react';
import Sorting from '../sorting';
import { GridColDef } from '@mui/x-data-grid';

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

const rows: {
  id: number;
  loan_id: string;
  borrower_id: string;
  amount: number;
  term: number;
  rate_annual: number;
  status: string;
  period_start_at: string;
  period_end_at: string;
  principal: number;
  interest: number;
  service_fee_amount: number;
  service_fee_rate: number;
}[] = [];

describe('Sorting Component', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Sorting
        columns={columns}
        rows={rows}
        pageSize={5}
        pageSizeOptions={[5]}
        checkboxSelection
      />,
    );

    expect(container.querySelector('.MuiDataGrid-root')).toBeInTheDocument();
  });
});
