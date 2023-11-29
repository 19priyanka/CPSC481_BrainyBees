import * as React from "react";
import { useState,useEffect } from "react";
import { useNavigate} from "react-router-dom";
import "./Navbar.css";
import Button from "@mui/material/Button";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {useLocation} from "react-router"
import MenuItem from '@mui/material/MenuItem';

import Menu from '@mui/material/Menu';

// links should be an array of objects in this format {link:'link', name:'name'} handle change is how to handle the change in the language
function Navbar() {
  const [userName,setUserName] = useState('')
  const location = useLocation();
  const dontShowRoutes = ['/','/homescreen']
  

  const [dontShowPages ,setDontShowPages] = useState(false);
  const [currentPage, setCurrentPage] = useState(''); 

  const [showLogin,setShowLogin] = useState(true)
  const [userElement, setUserElement] = useState(null);
  const openUserMenu = (event) => {
    setUserElement(event.currentTarget);
  };

  const logout = ()=> {
    sessionStorage.removeItem("userName")
    setUserName('')
    setUserElement(null);
  }

  const settings = [{name : 'Profile', onclick: ()=>{navigate('/profile')}}, { name: "Logout", onclick: logout }];



  const closeUserMenu = () => {
    setUserElement(null);
  };
  const pages = [
   /* {
      link:'/games',
      name:'Games'
    },
    {
      link:'/Quizzes',
      name:'Quizzes'
    },
    {
      link:'/Lessons',
      name:'Lessons'
    },
    {
      link:'/PracticeProblems',
      name:'Practice Problems'
    },
    {
      link:'/supplementarydocuments',
      name:'Supplementary Documents'
    },*/
    
  ]

  const setLocalStorage = ()=>{
    const userName = sessionStorage.getItem("userName")
      if(userName !== null){
        setUserName(userName)

  }
}

  useEffect(()=> {
    // could use local storage instead of session storage if we want it to persist after closing the browser
    //set timeout to fix weird bug

    
    setTimeout(()=>{

      // get current page
    const current = window.location.pathname
    let found = false;
    pages.forEach((page)=> {
      if(current.includes(page.link)) {
        setCurrentPage(page.link)
        found = true;
      }
    })
    if(!found) {

      setCurrentPage('')
    }
       
    console.log('new location: ', location)
    setLocalStorage()
    setShowLogin(location.pathname !== '/login' && location.pathname !== '/signup')
    setDontShowPages(dontShowRoutes.some((path) => location.pathname === path 
    || (dontShowRoutes.includes(location.pathname) && path !== '/' )))
        
    },0)
  
    if(userName !== null){
      setUserName(userName)
    }
    // get current page
    const current = window.location.pathname
    pages.forEach((page)=> {
      if(current.includes(page.link)) {
        setCurrentPage(page.link)
      }
    })
  
  }, [dontShowRoutes, location])

 

  const navigate = useNavigate();
 

  return (
    <>
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
            {!dontShowPages && pages.map((page) => (
              <Button
                key={page.name}
                
                onClick={()=>{
                  setCurrentPage(page.link)  
                  navigate(page.link)}}
                sx={{   '&:hover': { backgroundColor: '#00008B' }, my: 2, color: 'white', display: 'block',    ...(page.link === currentPage? {textDecoration: 'underline'}: {})
              }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          { 
          showLogin &&
          (<><Box sx={{ flexGrow: 0,mr:5}}>
            {

              !userName ? 
              <div style={{display:'flex'}}>
              
              <Button
              onClick={()=>{navigate('/login')}}
              sx={{ my: 2, color: 'white', display: 'block' }}>Login</Button>
              <Button
              onClick={()=>{navigate('/signup')}}
              sx={{ my: 2, color: 'white', display: 'block' }}>Sign Up</Button>
              
              
               </div> :
              <div className="welcome-banner" onClick={openUserMenu}>Welcome {userName} </div>
            }
          </Box>
          <Menu
              sx={{ mt: '2em',
              }}
              anchorEl={userElement}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(userElement)}
              onClose={closeUserMenu}
            >
              {settings.map((option) => (
                <MenuItem key={option.name} onClick={option.onclick}>
                  <Typography textAlign="center">{option.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          

       
            </>
          
          
          )
          }


          
        </Toolbar>
        
 </div>
    </AppBar>
    
    </>
  );
}

export default Navbar;