import * as React from "react";
import { useState,useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Navbar.css";
import Button from "@mui/material/Button";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

// links should be an array of objects in this format {link:'link', name:'name'} handle change is how to handle the change in the language
function Navbar() {
  const [userName,setUserName] = useState('')


  const pages = [
    {
      link:'/games',
      name:'Games'
    },
    {
      link:'/quizzes',
      name:'Quizzes'
    },
    
  ]

  useEffect(()=> {
    // could use local storage instead of session storage if we want it to persist after closing the browser
    const userName = sessionStorage.getItem("userName")
    if(userName !== null){
      setUserName(userName)
    }
  
  }, [])

  

  const navigate = useNavigate();
 

  return (
    <AppBar className="banner" position="static">
      <div className="container navbarsplit">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 4,
              fontWeight: 500,
              
              display: { xs: 'none', md: 'flex' },
              textDecoration: 'none',
            }}
          >
            <Button
                
                onClick={()=>{navigate('/homescreen')}}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Brainy Bees
              </Button>
          </Typography>

     

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 4,
              fontWeight: 500,
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
}}
          >
           
            <Button
                
                onClick={()=>{navigate('/homescreen')}}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Brainy Bees
              </Button>
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={()=>{navigate(page.link)}}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          
          <Box sx={{ flexGrow: 0,mr:5}}>
            {

              !userName ? 
              <Button
              onClick={()=>{navigate('/login')}}
              sx={{ my: 2, color: 'white', display: 'block' }}>Login</Button> :
              <div>Welcome {userName} </div>
            }
          </Box>
          
        </Toolbar>
        
 </div>
    </AppBar>
  );
}

export default Navbar;