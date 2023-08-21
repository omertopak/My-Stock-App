import Chart from "../components/Chart"
import DashCards from "../components/DashCards"
import { red } from '@mui/material/colors'
import useStockCall from "../hooks/useStockCall"
import { useEffect } from "react"
import { Stack, Typography } from "@mui/material"

const Home = () => {
  const { getStockData } = useStockCall()
  const color = red[900]
  useEffect(() => {
    getStockData("sales")
    getStockData("purchases")
  }, [])
  return <div>
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4" color={color}>Dashboard</Typography>
        
      
      </Stack>  
    <DashCards/>

    <Chart />
  </div>
}

export default Home
