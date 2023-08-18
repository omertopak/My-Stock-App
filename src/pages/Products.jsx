import ProductTable from "../components/ProductTable"
import { Button, Stack, Typography } from "@mui/material"
import { red } from '@mui/material/colors'
import { useEffect } from "react"
import useStockCall from "../hooks/useStockCall"
import { useSelector } from "react-redux"
import ProductModal from "../components/ProductModal"
import { useState } from "react"


const Products = () => {
  const { products } = useSelector((state) => state.stock)
  const { getStockData } = useStockCall()
  
  // console.log(firms);
  const color = red[900]


   const [info, setInfo] = useState({
    category: "",
    brands: "",
    product: "",
    
   }) 
  // modal

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    setInfo({ name: "", phone: "", address: "", image: "" })
  };


  useEffect(() => {
      // getFirms()
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