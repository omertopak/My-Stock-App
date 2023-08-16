import { useEffect } from "react"
import FirmCard from "../components/FirmCard"
import useStockCall from "../hooks/useStockCall"
import { Button, Stack, Typography } from "@mui/material"
import {red} from '@mui/material/colors'
import { useSelector } from "react-redux"

const Firms = () => {
  const { stocks } = useSelector((state) => state.stock)
  const {getStockData} = useStockCall()
  // useEffect(()=>{
  //   getStockSuccess()
  // })

  useEffect(() => {
    // getFirms()
    getStockData()
    
  }, [])
  console.log(stocks);
  const color = red[900]
  return (
  <div>
    <Stack direction="row" justifyContent="space-between">
      <Typography variant="h4" color={color}>Firms</Typography>
      <Button variant="contained" size="small" >+ New Firm</Button>
    </Stack>
    <Stack>
  
        <Stack 
        direction="raw"
        justifyContent="space-evenly"
        useFlexGap
        > 
        {stocks?.map((firm)=>(
          <FirmCard  firm={firm} /> 
          ))}

        </Stack>
        
     
    </Stack>
  </div>
  )
}

export default Firms
