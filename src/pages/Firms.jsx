import { useEffect } from "react"
import FirmCard from "../components/FirmCard"
import useStockCall from "../hooks/useStockCall"
import { Button, Stack, Typography } from "@mui/material"
import { red } from '@mui/material/colors'
import { useSelector } from "react-redux"
import FirmModal from "../components/FirmModal"
import { useState } from "react"
import { Box } from "@mui/material"


const Firms = () => {
  const { firms } = useSelector((state) => state.stock)
  const { getStockData } = useStockCall()
  
  // console.log(firms);
  const color = red[900]


   const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
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
      getStockData("firms")

    }, [])
  return (
    <div>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4" color={color}>Firms</Typography>
        <Button variant="contained" size="small" onClick={handleOpen}>+ New Firm</Button>
      
      </Stack>  
      <FirmModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />  
      <Stack>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        useFlexGap
        spacing={2}
        flexWrap="wrap"
      >
          {firms?.map((firm) => (
            <FirmCard 
              key={firm.id}
              firm={firm}
              handleOpen={handleOpen}
              info={info}
              setInfo={setInfo}
              />
          ))}

        </Stack>


      </Stack>
    </div>
  )
}

export default Firms
