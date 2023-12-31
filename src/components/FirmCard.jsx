import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Stack } from '@mui/material';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import EditIcon from "@mui/icons-material/Edit"
import useStockCall from '../hooks/useStockCall';


export default function FirmCard({firm,handleOpen,setInfo}) {
  //console.log(firm);
  const { deleteStockData } = useStockCall()
  const { getStockData } = useStockCall()

  return (
    <Stack  key={firm.id} 
    sx={{
      p: 2,
      width: "300px",
      height: "400px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          width="280px"
          image={firm.image}
          sx={{ p: 1, objectFit: "contain", height: 140 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {firm.name}
          </Typography>
          <Typography variant="body2" color="text.secondary"
          sx={{ p: 1, height: 140 }}
          >
            {firm.address}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {firm.phone}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <EditIcon
            sx={{"&:hover": { color: "red", cursor: "pointer" }}}
            onClick={() => {
              handleOpen()
              setInfo(firm)
              getStockData("firm")
            }}
            />
          <DeleteOutlineIcon
            sx={{"&:hover": { color: "red", cursor: "pointer" }}}
            onClick={() => deleteStockData("firms",firm.id)}
            />

          
        
        
      </CardActions>
    </Stack>
  );
}
