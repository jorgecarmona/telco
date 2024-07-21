import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Loan {
  id: number;
  borrower_id: number;
  amount: number;
  term: number;
  rate_annual: number;
  status: string;
}

export interface Period {
  start_at: string; 
  end_at: string;   
}

export interface ServiceFee {
  amount: number;
  rate: number;
}

export interface LoanData {
  loan: Loan;
  period: Period;
  principal: number;
  interest: number;
  service_fee: ServiceFee;
}

export const loansApi = createApi({
  reducerPath: 'loansApi', 
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://wunder-interviews.herokuapp.com',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getLoans: builder.query<LoanData[], void>({
      query: () => '/loan_payments.json',
    }),
  }),
});

export const { useGetLoansQuery } = loansApi;
