import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Stack } from '@mui/material';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import EditIcon from "@mui/icons-material/Edit"

export default function FirmCard({firm}) {
  //console.log(firm);
  return (
    <Stack  key={firm.id} 
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={firm.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {firm.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {firm.address}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {firm.phone}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <DeleteOutlineIcon/>
          <EditIcon/>
        </Button>
        
      </CardActions>
    </Stack>
  );
}
