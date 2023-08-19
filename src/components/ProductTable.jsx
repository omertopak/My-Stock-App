import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridActionsCellItem,GridToolbar } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { DeleteForeverIcon } from '@mui/icons-material/DeleteForever';
import useStockCall from '../hooks/useStockCall';



export default function ProductTable() {
  const {products} = useSelector((state)=>state.stock)
  const {deleteStockData} = useStockCall((state)=>state.stock)

  const columns = [
    { field: 'id', headerName: '#', flex:1,
  },
    {
      field: 'category',
      headerName: 'Category',
      flex:2,
      editable: true,
      align:"center",
      headerAlign:"center"
    },
    {
      field: 'brand',
      headerName: 'Brand',
      flex:2,
      editable: true,
      align:"center",
      headerAlign:"center"
    },
    {
      field: 'name',
      headerName: 'Name',
      type: 'text',
      flex:2,
      editable: true,
      align:"center",
      headerAlign:"center",
    },
    {
      field: 'stock',
      headerName: 'Stock',
      description: 'This column has a value getter and is not sortable.',
      sortable: true,
      type: 'number',
      flex:2,
      align:"center",
      headerAlign:"center"
    },
    {
      field: 'actions',
      type:"action",
      headerName: 'Actions',
      // sortable: false,
      flex:3,
      // width: 160,
      align:"center",
      headerAlign:"center",
      getActions:(params)=>[
        <GridActionsCellItem
          icon={<DeleteForeverIcon/>}
          label="delete"
          // sx={style}
          onClick={()=>deleteStockData("products",params.id)}
        />
      ]
    },
  ];
  

  console.log(products);
  return (
    <Box sx={{ height: "auto", width: '100%' }}>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}