import React, { useState } from 'react';
import { DataGrid as MuiDataGrid, GridColDef } from '@mui/x-data-grid';
import { LoanData } from '../store/api-slice/loans-api';

interface DataGridProps {
  data: LoanData[];
}

function DataGrid({ data }: DataGridProps) {
  const [numRows, setNumRows] = useState(0);
  const [numCols, setNumCols] = useState(0);

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
  ].slice(0, numCols);

  const rows = data.slice(0, numRows).map((item, index) => ({
    id: index,
    loan_id: item.loan.id,
    borrower_id: item.loan.borrower_id,
    amount: item.loan.amount,
    term: item.loan.term,
    rate_annual: item.loan.rate_annual,
    status: item.loan.status,
    period_start_at: item.period.start_at,
    period_end_at: item.period.end_at,
    principal: item.principal,
    interest: item.interest,
    service_fee_amount: item.service_fee.amount,
    service_fee_rate: item.service_fee.rate,
  }));

  const handleNumRowsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumRows(parseInt(e.target.value, 10));
  };

  const handleNumColsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumCols(parseInt(e.target.value, 10));
  };

  return (
    <div>
    <br/>
      <form>
        <label>
          Number of Rows:
          <input type="number" value={numRows} onChange={handleNumRowsChange} />
        </label>
        <label>
          Number of Columns:
          <input type="number" value={numCols} onChange={handleNumColsChange} />
        </label>
      </form>
      <br/>
      <div style={{ height: 400, width: '100%' }}>
        <MuiDataGrid 
        rows={rows} 
        columns={columns} />
      </div>
    </div>
  );
}

export default DataGrid;
