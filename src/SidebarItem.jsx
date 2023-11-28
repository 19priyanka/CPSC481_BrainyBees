import React from 'react'
import { useState } from 'react'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useNavigate} from "react-router-dom";
export default function SidebarItem({ label,link, children }) {
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();
    const handleClick = () => {
      setOpen(!open);
    };
    if(!link){
        link = window.location.pathname
    }
    if(!children){
        children = []
    }
  return (
    <>
    
    <ListItemButton onClick={handleClick}>
          <ListItemText primary={label} onClick={()=>{navigate(link)}}/>
         { children.length > 0 ?  open ? <ExpandLess /> : <ExpandMore /> : null }
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List sx={{ pl: 4 }} component="div" disablePadding>
            {
                children.map((menuitem) => (
                   <SidebarItem  label={menuitem.label} link={menuitem.link} children={menuitem.children} />
                ))
            }
          </List>
        </Collapse>
        </>
  )
}
