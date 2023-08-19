import PurchaseTable from "../components/PurchaseTable"
import { Button, Stack, Typography } from "@mui/material"
import { red } from '@mui/material/colors'
import { useEffect } from "react"
import useStockCall from "../hooks/useStockCall"
import PurchaseModal from "../components/PurchaseModal"
import { useState } from "react"


const Purchases = () => {
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
      <PurchaseTable/>
    </div>
  )
}

export default Purchases