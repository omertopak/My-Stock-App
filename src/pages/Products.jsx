import ProductTable from "../components/ProductTable"
import { Button, Stack, Typography } from "@mui/material"
import FirmModal from "../components/FirmModal"


const Products = () => {
  const color = red[900]

  return (
    <div>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4" color={color}>Firms</Typography>
        <Button variant="contained" size="small" >+ New Firm</Button>
      
      </Stack>  
      {/* <FirmModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />   */}
      <Stack></Stack>
      <ProductTable/>
    </div>
  )
}

export default Products