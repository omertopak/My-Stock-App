import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Stack } from '@mui/material';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import EditIcon from "@mui/icons-material/Edit"
import useStockCall from '../hooks/useStockCall';


export default function BrandCard({brand,handleOpen,setInfo}) {
  //console.log(brand);
  const { deleteStockData } = useStockCall()


  return (
    <Stack  key={brand.id} 
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
          image={brand.image}
          alt="green iguana"
          sx={{objectFit:"contain"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {brand.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {brand.image}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <EditIcon
            sx={{"&:hover": { color: "red", cursor: "pointer" }}}
            onClick={() => {
              handleOpen()
              // setInfo(brand)
            }}
            />
          <DeleteOutlineIcon
            sx={{"&:hover": { color: "red", cursor: "pointer" }}}
            onClick={() => deleteStockData("brands",brand.id)}
            />

          
        
        
      </CardActions>
    </Stack>
  );
}
