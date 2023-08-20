import { red } from '@mui/material/colors'
import { useEffect, useState } from "react"
import useStockCall from "../hooks/useStockCall"
import SaleModal from "../components/SaleModal"
import SaleTable from "../components/SaleTable"
import { Button, Stack, Typography } from "@mui/material"

const Sales = () => {
  const { getStockData, getProdCatBrands } = useStockCall()
  const [open, setOpen] = useState(false)
  const color = red[900]
  const handleOpen = () => setOpen(true)

  const [info, setInfo] = useState({
    brand_id: "",
    product_id: "",
    quantity: "",
    price: "",
  })

  const handleClose = () => {
    setOpen(false)
    setInfo({ brand_id: "", product_id: "", quantity: "", price: "" })
  }

  useEffect(() => {
    getStockData("categories")
    getStockData("brands")
    getStockData("products")
    getStockData("sales")
  }, []) 
  return (
    <div>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4" color={color}>Sales</Typography>
        <Button variant="contained" size="small" onClick={() => setOpen(true)}>+ New Sale</Button>
      
      </Stack> 
     

      <SaleModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

      <SaleTable handleOpen={handleOpen} setInfo={setInfo} />
    </div>
  )
}

export default Sales