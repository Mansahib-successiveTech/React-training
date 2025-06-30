'use client';

import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

export default function DataTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();

      const formatted = data.map((user) => ({
        id: user.id,
        Name: user.name,
        age: Math.floor(Math.random() * 50) + 1,
      }));

      setRows(formatted);
    }

    fetchData();
  }, []);

  const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Name', headerName: 'Name', width: 130 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90 },
 
];
  return (
    <Paper sx={{ height: 400, width: 500 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10]}
        initialState={{
          pagination: { paginationModel: { page: 0, pageSize: 4 } },
        }}
        checkboxSelection
      />
    </Paper>
  );
}
