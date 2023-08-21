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
  const { getStockData } = useStockCall()

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
          image={brand?.image}
          sx={{ p: 1, objectFit: "contain", height: "250px" }}
          component="img"
          alt="brand-img"
        />
        <CardContent>
          <Typography align='center' justifyContent="center" gutterBottom variant="h5" component="div">
            {brand?.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <EditIcon
            sx={{"&:hover": { color: "red", cursor: "pointer" }}}
            onClick={() => {
              handleOpen()
              setInfo(brand)
              getStockData("brand")
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
