import ProductTable from "../components/ProductTable"
import { Button, Stack, Typography } from "@mui/material"
import { red } from '@mui/material/colors'
import { useEffect } from "react"
import useStockCall from "../hooks/useStockCall"
import ProductModal from "../components/ProductModal"
import { useState } from "react"


const Products = () => {
  // const { categories,brands } = useSelector((state) => state.stock)
  const { getStockData } = useStockCall()
  
  // console.log(firms);
  const color = red[900]


   const [info, setInfo] = useState({
        name: "",
        category_id: "",
        brand_id: "",
      }) 
  // modal

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    setInfo({ 
      name: "",
      category_id: "",
      brand_id: "",
    })
  };


  useEffect(() => {
      // getFirms()
      getStockData("categories")
      getStockData("brands")
      getStockData("products")
     
    }, [])
  return (
    <div>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4" color={color}>Products</Typography>
        <Button variant="contained" size="small" onClick={handleOpen}>+ New Product</Button>
      
      </Stack>  
      <ProductModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />  
      <Stack></Stack>
      <ProductTable/>
    </div>
  )
}

export default Products