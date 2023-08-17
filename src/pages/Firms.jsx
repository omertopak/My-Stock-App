import { useEffect } from "react"
import FirmCard from "../components/FirmCard"
import useStockCall from "../hooks/useStockCall"
import { Button, Stack, Typography } from "@mui/material"
import { red } from '@mui/material/colors'
import { useSelector } from "react-redux"
import { useState } from "react"
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const Firms = () => {
  const { firms } = useSelector((state) => state.stock)
  const { getStockData } = useStockCall()
  // useEffect(()=>{
  //   getStockSuccess()
  // })

  useEffect(() => {
    // getFirms()
    getStockData("firms")

  }, [])
  console.log(firms);
  const color = red[900]
  //MODAL
  const styleOfModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4" color={color}>Firms</Typography>

        <div>
          <Button variant="contained" size="small" onClick={handleOpen}>+ New Firm</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={styleOfModal}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </div>

      </Stack>
      <Stack>

        <Stack
          direction="raw"
          justifyContent="space-evenly"
          useFlexGap
          spacing={2}
          flexWrap="wrap"
        >
          {firms?.map((firm) => (
            <FirmCard firm={firm} />
          ))}

        </Stack>


      </Stack>
    </div>
  )
}

export default Firms
