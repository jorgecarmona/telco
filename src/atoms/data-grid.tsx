// components/DataGrid.tsx
import React from 'react';
import { DataGrid as MuiDataGrid, GridColDef } from '@mui/x-data-grid';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface DataGridProps {
  posts: Post[];
  numCols: number;
}

function DataGrid({ posts, numCols }: DataGridProps) {

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 250 },
    { field: 'title', headerName: 'title', width: 250 },
    { field: 'body', headerName: 'body', width: 450 },
  ].slice(0, numCols);  // Limita las columnas según numCols

  const rows = posts.map((post) => ({
    id: post.id,
    title: post.title,
    body: post.body,
  }));

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h1>Posts</h1>
      <MuiDataGrid rows={rows} columns={columns} />
    </div>
  );
}

export default DataGrid;
