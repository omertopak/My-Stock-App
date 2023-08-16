import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import InventoryIcon from "@mui/icons-material/Inventory"
import StoreIcon from "@mui/icons-material/Store"
import StarsIcon from "@mui/icons-material/Stars"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount"
import { useNavigate } from "react-router-dom"
import { Box } from "@mui/material"

const listOfDash=[
  {
    icon:<DashboardCustomizeIcon />,
    title:"Dashboard",
    url:"stock/"
  },
  {
    icon:<ShoppingCartIcon />,
    title:"Purchase",
    url:"stock/purchase/"
  },
  {
    icon:<AttachMoneyIcon />,
    title:"Sales",
    url:"stock/sales/"
  },
  {
    icon:<StoreIcon />,
    title:"Firms",
    url:"stock/firms/"
  },
  {
    icon:<StarsIcon />,
    title:"Products",
    url:"stock/products"
  },
  {
    icon:<InventoryIcon />,
    title:"Brands",
    url:"stock/brands"
  },
  {
    icon:<SupervisorAccountIcon />,
    title:"Admin Panel",
    url:"https://10248.fullstack.clarusway.com/admin"
  },
]

const MenuListItems = () => {
  const navigate = useNavigate()
  
  //? window.location.href =item.url
  return (
    <Box sx={{ width: '100%', maxWidth: 360, }}>
      {listOfDash.map((item,index)=>(
     
        <List>
          <ListItem 
         key={index}
          disablePadding
          sx={{color:"white",
          "& .MuiSvgIcon-root": { color: "white" },
          "&:hover": { color: "red" },
          "&:hover .MuiSvgIcon-root": { color: "red" },
            }}

          >
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText  primary={item.title} />
            </ListItemButton>
          </ListItem>
        </List>
      
    ))}
      
    </Box>
  )
}

export default MenuListItems