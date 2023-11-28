import React from 'react'
import { useState, useEffect } from 'react'
import { Drawer } from '@mui/material'
import Divider from '@mui/material'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Button from "@mui/material/Button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useLocation} from "react-router"


import SidebarItem from './SidebarItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function SideBar() {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState('');
    const dontShowRoutes = ['/','/homescreen']

    useEffect(()=> {
        // could use local storage instead of session storage if we want it to persist after closing the browser
        //set timeout to fix weird bug
        debugger
        
        setTimeout(()=>{
    
          // get current page
        const current = window.location.pathname
        if(currentPage !== current){
            setCurrentPage(current)
            setOpen(false)
        }
        let found = false;
        
       
            
        },0)
      
       
      }, [dontShowRoutes, location])


  const handleDrawerOpen = () => {
    setOpen(!open);
  };

    const sideBarItems = [
        {
            label:'Lessons',
            children:[
                {
                    label:'Loops',
                    link:'/Lessons/Loops',
                    children:[
                        {
                            label:'For Loops',
                            link:'Lessons/Loops/ForLoop'
                        },
                        {
                            label:'While Loops',
                            link:'Lessons/Loops/ForLoop'
                        },
                        {
                            label:'Do While Loops',
                            link:'/'
                        },
                    ]
                },
                {
                    label:'Variables',
                    children:[]
                },
                {
                    label:'Conditionals',
                    children:[]
                },
                {
                    label:'Pointers',
                    children:[]
                },
                {
                    label:'Inheritance',
                    children:[]
                },
            ]
        },
        {
            label:'Games',
            children:[
                {
                    label:'Loops',
                    link:'/games/loops',
                    children:[
                        {
                            label:'For Loops',
                            link:'/games/loops/forloopgame'
                        },
                        {
                            label:'While Loops',
                            link:'/games/loops/whileloopgame'
                        },
                        {
                            label:'Do While Loops',
                            link:'/'
                        },
                    ]
                },
                {
                    label:'Variables',
                    children:[]
                },
                {
                    label:'Conditionals',
                    children:[]
                },
                {
                    label:'Pointers',
                    children:[]
                },
                {
                    label:'Inheritance',
                    children:[]
                },
            ]
        },
        {
            label:'Quizzes',
            link:'/Quizzes',
            children:[
                {
                    label:'Loops',
                    children:[
                        {
                            label:'For Loops',
                            link:'/Quizzes/Loops/ForLoopQuiz'
                        },
                        {
                            label:'While Loops',
                            link:'/'
                        },
                        {
                            label:'Do While Loops',
                            link:'/'
                        },
                    ]
                },
                {
                    label:'Variables',
                    children:[]
                },
                {
                    label:'Conditionals',
                    children:[]
                },
                {
                    label:'Pointers',
                    children:[]
                },
                {
                    label:'Inheritance',
                    children:[]
                },
            ]
        },
        {
            label:'Supplemental Documents',
            children:[
                {
                    label:'Loops',
                    children:[
                        {
                            label:'For Loops',
                            link:'/games/forloopgame'
                        },
                        {
                            label:'While Loops',
                            link:'/games/whileloopgame'
                        },
                        {
                            label:'Do While Loops',
                            link:'/'
                        },
                    ]
                },
                {
                    label:'Variables',
                    children:[]
                },
                {
                    label:'Conditionals',
                    children:[]
                },
                {
                    label:'Pointers',
                    children:[]
                },
                {
                    label:'Inheritance',
                    children:[]
                },
            ]
        },
        {
            label:'Practice Problems',
            link:'/PracticeProblems',
            children:[
                {
                    label:'Loops',
                    children:[
                        {
                            label:'For Loops',
                            link:'/'
                        },
                        {
                            label:'While Loops',
                            link:'PracticeProblems/Loops/WhileLoop'
                        },
                        {
                            label:'Do While Loops',
                            link:'/'
                        },
                    ]
                },
                {
                    label:'Variables',
                    children:[]
                },
                {
                    label:'Conditionals',
                    children:[]
                },
                {
                    label:'Pointers',
                    children:[]
                },
                {
                    label:'Inheritance',
                    children:[]
                },
            ]
        },
    ]
  
    return (
        <>
         {
        !open && 
        <Button
        sx={{ height: 100,display:'block' }}
        onClick={handleDrawerOpen}

      >
        Open Menu<ArrowForwardIcon></ArrowForwardIcon> 
      </Button>
        }

     
        
        <Drawer
     
        anchor="left"
        open={open}
        onClose={handleDrawerOpen}
      >
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
            <IconButton
              
                onClick={handleDrawerOpen}
        
              >
                <ArrowBackIcon />
              </IconButton>
          </ListSubheader>
        }
      >
        {
            sideBarItems.map((menuitem) => (
                <SidebarItem  label={menuitem.label} link={menuitem.link} children={menuitem.children} />
            ))
        }
       
      </List>
      </Drawer>
        </>
    );
}
export default SideBar