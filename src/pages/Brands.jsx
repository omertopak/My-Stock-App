import { useEffect } from "react"
import BrandCard from "../components/BrandCard"
import useStockCall from "../hooks/useStockCall"
import { Button, Stack, Typography } from "@mui/material"
import { red } from '@mui/material/colors'
import { useSelector } from "react-redux"
import BrandModal from "../components/BrandModal"
import { useState } from "react"



const Brands = () => {
  const { brands } = useSelector((state) => state.stock)
  const { getStockData } = useStockCall()

  // console.log(brands);
  const color = red[900]


  const [info, setInfo] = useState({
    name: "",
    image: "",
  })
  // modal

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    setInfo({ name: "",image: "" })
  };


  useEffect(() => {
    // getBrands()
    getStockData("brands")

  }, [])
  return (
    <div>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4" color={color}>Brands</Typography>
        <Button variant="contained" size="small" onClick={handleOpen}>+ New Brand</Button>
      </Stack>
      <BrandModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />


      <Stack>
        <Stack
          direction="raw"
          justifyContent="space-evenly"
          useFlexGap
          spacing={2}
          flexWrap="wrap"
          >
          {brands?.map((brand) => (
            <BrandCard
              brand={brand}
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

export default Brands
