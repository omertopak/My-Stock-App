import * as React from "react"
import Box from "@mui/material/Box"
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid"
import { useSelector } from "react-redux"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import useStockCall from "../hooks/useStockCall"
import EditIcon from "@mui/icons-material/Edit"

export default function PurchaseTable({ handleOpen, setInfo}) {
    const style = {
        "&:hover": { color: "red", cursor: "pointer" },
    }
    const { purchases } = useSelector((state) => state.stock)
    const { deleteStockData } = useStockCall()

    const columns = [
        {
          field: "createds",
          headerName: "Date",
          minWidth: 150,
          headerAlign: "center",
          align: "center",
        },
        {
          field: "firm",
          headerName: "Firm",
          flex: 2,
          minWidth: 100,
          headerAlign: "center",
          align: "center",
        },
    
        {
          field: "brand",
          headerName: "Brand",
          flex: 1.5,
          minWidth: 100,
          headerAlign: "center",
          align: "center",
        },
        {
          field: "product",
          headerName: "Product",
          flex: 1.5,
          minWidth: 100,
          headerAlign: "center",
          align: "center",
        },
        {
          field: "quantity",
          headerName: "Quantity",
          minWidth: 70,
          headerAlign: "center",
          align: "center",
          flex: 1,
          type: "number",
        },
        {
          field: "price",
          headerName: "Price",
          minWidth: 70,
          headerAlign: "center",
          align: "center",
          flex: 1,
          type: "number",
        },
        {
          field: "price_total",
          headerName: "Amount",
          minWidth: 90,
          headerAlign: "center",
          align: "center",
          flex: 1,
          type: "number",
        },
        {
            field: 'actions',
            type: "actions",
            headerName: 'Actions',
            // sortable: false,
            flex: 3,
            // width: 160,
            align: "center",
            headerAlign: "center",
            renderCell: ({
                id,
                row: { brand_id, product_id, quantity, price, firm_id },
              }) => [
                <GridActionsCellItem
                  key={"edit"}
                  icon={<EditIcon />}
                  label="Edit"
                  onClick={() => {
                    handleOpen()
                    setInfo({ id, firm_id, brand_id, product_id, quantity, price })
                  }}
                  sx={style}
                />,
                <GridActionsCellItem
                  key="delete"
                  icon={<DeleteForeverIcon />}
                  label="Delete"
                  onClick={() => deleteStockData("purchases", id)}
                  sx={style}
                />,
              ],
        },
    ];


    //console.log(purchases);
    return (
        <Box sx={{ height: "auto", width: '100%' }}>
            <DataGrid
                rows={purchases}
                columns={columns}
                pageSizeOptions={[10, 20, 50, 100]}
                disableRowSelectionOnClick
                slots={{ toolbar: GridToolbar }}
            />
        </Box>
    );
}