import * as React from "react"
import Box from "@mui/material/Box"
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid"
import { useSelector } from "react-redux"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import useStockCall from "../hooks/useStockCall"

export default function PurchaseTable() {
  const style = {
    "&:hover": { color: "red", cursor: "pointer" },
  }
  const {purchases} = useSelector((state)=>state.stock)
  const {deleteStockData} = useStockCall()

  const columns = [
    { field: 'createds', 
    headerName: 'Date', 
    flex:3,
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
      headerName: 'product',
      flex:2,
      editable: true,
      align:"center",
      headerAlign:"center"
    },
    {
      field: 'brand',
      headerName: 'Brand Name',
      type: 'text',
      flex:2,
      editable: true,
      align:"center",
      headerAlign:"center",
    },
    {
      field: 'product',
      headerName: 'Product Name',
      sortable: true,
      type: 'number',
      flex:2,
      align:"center",
      headerAlign:"center"
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      sortable: true,
      type: 'number',
      flex:2,
      align:"center",
      headerAlign:"center"
    },
    {
      field: 'price',
      headerName: 'Price',
      sortable: true,
      type: 'number',
      flex:2,
      align:"center",
      headerAlign:"center"
    },
    {
      field: 'stock',
      headerName: 'Amount',
      sortable: true,
      type: 'number',
      flex:2,
      align:"center",
      headerAlign:"center"
    },
    {
      field: 'actions',
      type:"actions",
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
          sx={style}
          onClick={()=>deleteStockData("purchases",params.id)}
        />
      ]
    },
  ];
  

  //console.log(purchases);
  return (
    <Box sx={{ height: "auto", width: '100%' }}>
      <DataGrid
        rows={purchases}
        columns={columns}
        pageSizeOptions={[10]}
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
}