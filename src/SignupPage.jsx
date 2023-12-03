import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import './LoginPage.css'

export default function SignupPage() {

   
  const [userName,setUserName] = useState('')
  const [password,setPassword] = useState('')
  const [fullName,setFullName] = useState('')



  const [userNameError,setUserNameError] = useState(false)
  const [passwordError,setPasswordError] = useState(false)
  const [email,setEmail] = useState('')
  const [emailError,setEmailError] = useState(false)
  const [fullNameError,setFullNameError] = useState(false)
  const setInput = (field,e) => {
    if(field === 'username') {
      setUserName(e.target.value)
    }
    else if(field === 'password') {
      setPassword(e.target.value)
    }
    else if(field === 'email') {
        setEmail(e.target.value)
    }
    else if(field === 'fullname'){
      setEmail(e.target.value)
    }
  }

  const submit = (e) => {
    e.preventDefault()
    if(userName === ''){
      setUserNameError(true)
    }
    if(password === ''){
      setPasswordError(true)
      
    }
    if(email === ''){
        setEmailError(true)
    }

    if(fullName === ''){
      setFullNameError(true)
    }
}
    return (
        <>
        <form onSubmit={submit}>
        <div className='login-page-container'>
          <h1>Sign Up Page</h1>
          <TextField
              error={fullNameError} 
              value = {fullName}
              label="Full Name"
              defaultValue=""
              helperText={ fullNameError && 'Invalid name'}
    
              className={ fullNameError && 'outlined-error'}
              required
              sx={{minWidth:'15%'}}
              onChange={(e) => setInput('fullname',e)}
    
            />
            <TextField
              error={userNameError} 
              value = {userName}
              label="Username"
              defaultValue=""
              helperText={ userNameError && 'Invalid Username'}
    
              className={ userNameError && 'outlined-error'}
              required
              sx={{minWidth:'15%'}}
              onChange={(e) => setInput('username',e)}
    
            />
            <TextField
              error={emailError} 
              value = {email}
              label="Email"
              type='email'
              defaultValue=""
              helperText={ emailError && 'Invalid Email'}
              required
    
              className={ emailError && 'outlined-error'}
    
              sx={{minWidth:'15%'}}
              onChange={(e) => setInput('email',e)}
    
            />
            <TextField
              value = {password}
              error={passwordError}
              type='password'
              className={ passwordError && 'password-error'}
              label="Password"
              helperText={ passwordError && 'Invalid Password'}
              required
              defaultValue=""
              sx={{minWidth:'15%'}}
              onChange={(e) => setInput('password',e)}
    
            />
            <Button sx={{maxWidth:'30%'}} type='submit' variant="contained">Sign up</Button>
            <Link to='/login'>Have an account? Log in</Link>
    
          </div>
         
          </form>
         
          </>
      )
    }
