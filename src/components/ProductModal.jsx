import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Modal from "@mui/material/Modal"
import useStockCall from "../hooks/useStockCall"
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useSelector } from "react-redux"
import InputLabel from '@mui/material/InputLabel';

export default function ProductModal({info,setInfo,open,handleClose}) {
  const style={
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  }


  const { postStockData} = useStockCall()
  const {categories,brands} = useSelector((state)=>state.stock)
//   console.log(brands);

  
  const handleSubmit = (e)=>{
    console.log(info);
    e.preventDefault()
    //console.log(info.id)
    postStockData("products",info)
    handleClose()
  }
  const handleChange = (e)=>{
    setInfo({...info, [e.target.name] : e.target.value})
  }
  return (
    <div>
      <Modal
      open={open}
      handleClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
      <Box sx={style}  >
        <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component="form"
            onSubmit={handleSubmit}
          >
          {/* Selectbox kismi */}
          <InputLabel id="categories">Categories</InputLabel>
        <Select
          labelId="categories"
          id="categories"
          name="category_id"
          value={info?.category_id}
          
          onChange={handleChange}
        >
           {categories?.map(({name,id})=>
            <MenuItem key={id} value={id}>{name}</MenuItem>
           )} 
        </Select>

        <InputLabel id="brands">Brands</InputLabel>
        <Select
          labelId="brands"
          id="brands"
          name="brand_id"
          value={info?.brand_id}
          onChange={handleChange}
        >
           {brands?.map(({name,id})=>
            <MenuItem key={id} value={id}>{name}</MenuItem>
           )} 
        </Select>
        
        <InputLabel id="Product Name">Product Name</InputLabel>
          <TextField 
            labelId="Product Name"
            id="name" 
            name="name"
            // label="Product Name" 
            variant="outlined"
            type="text"
            value={info?.name}
            required
            onChange={handleChange} />
          <Button variant="contained" type="submit">SUBMIT</Button>
          </Box>
        </Box>
        </Modal>
    </div>
  )
}
