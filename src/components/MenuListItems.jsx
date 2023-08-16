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
    url:""
  },
  {
    icon:<ShoppingCartIcon />,
    title:"Purchase",
    url:"purchase/"
  },
  {
    icon:<AttachMoneyIcon />,
    title:"Sales",
    url:"sales/"
  },
  {
    icon:<StoreIcon />,
    title:"Firms",
    url:"firms/"
  },
  {
    icon:<StarsIcon />,
    title:"Products",
    url:"products/"
  },
  {
    icon:<InventoryIcon />,
    title:"Brands",
    url:"brands/"
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
     
        <List key={index}>
          <ListItem 
          
          disablePadding
          sx={{color:"white",
          "& .MuiSvgIcon-root": { color: "white" },
          "&:hover": { color: "red" },
          "&:hover .MuiSvgIcon-root": { color: "red" },
            }}
          // onClick={()=>{navigate(item.url)}}  
          onClick={() => {
            item.url.includes("http" || "www")
              ? window.open(item.url, "_blank")
              : navigate(item.url)
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