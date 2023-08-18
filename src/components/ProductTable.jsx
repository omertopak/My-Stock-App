import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';

const columns = [
  { field: 'id', headerName: '#', width: 90 },
  {
    field: 'category',
    headerName: 'Category',
    width: 150,
    editable: true,
  },
  {
    field: 'brand',
    headerName: 'Brand',
    width: 150,
    editable: true,
  },
  {
    field: 'name',
    headerName: 'Name',
    type: 'text',
    width: 150,
    editable: true,
  },
  {
    field: 'stock',
    headerName: 'Stock',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 160,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
];

export default function ProductTable() {
  const {products} = useSelector((state)=>state.stock)
  console.log(products);
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}