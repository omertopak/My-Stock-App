import { Button, Stack, Typography } from "@mui/material"
import { red } from '@mui/material/colors'
import useStockCall from "../hooks/useStockCall"
import { useEffect } from "react"
import { useState } from "react"
import PurchaseModal from "../components/PurchaseModal"
import PurchaseTable from "../components/PurchaseTable"


const Purchases = () => {
  // const { categories,brands } = useSelector((state) => state.stock)
  const { getStockData } = useStockCall()
  const [open, setOpen] = useState(false)
  // console.log(firms);
  const color = red[900]


   const [info, setInfo] = useState({
    brand_id: "",
    product_id: "",
    quantity: "",
    price: "",
      }) 
  

  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    setInfo({ brand_id: "", product_id: "", quantity: "", price: "" })
  }


  useEffect(() => {
      // getFirms()
      getStockData("categories")
      getStockData("brands")
      getStockData("purchases")
     
    }, [])
  return (
    <div>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4" color={color}>Purchases</Typography>
        <Button variant="contained" size="small" onClick={handleOpen}>+ New Purchase</Button>
      
      </Stack>  
      <PurchaseModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />  
      <Stack></Stack>
      <PurchaseTable handleOpen={handleOpen} setInfo={setInfo}/>
    </div>
  )
}

export default Purchases