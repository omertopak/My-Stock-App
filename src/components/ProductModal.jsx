import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Modal from "@mui/material/Modal"
import useStockCall from "../hooks/useStockCall"
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


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

  const handleSubmit = (e)=>{
    console.log(info);
    e.preventDefault()
    console.log(info.id)
    postStockData("Products",info)
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
          
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          variant="outlined"
          name="category"
          value={""}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
        
        </Select>
        
          <TextField 
            id="name" 
            name="name"
            label="Product Name" 
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
