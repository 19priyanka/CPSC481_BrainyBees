import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from "react";
import { useNavigate} from "react-router-dom";
import './LoginPage.css'
export default function LoginPage() {
  const navigate = useNavigate();

  const hardCodedUsers = [
    {userName:'ben',password:'password'},
    {userName:'claire',password:'password'},
    {userName:'user',password:'password'},
    {userName:'steve',password:'password'},

  ]
  const [userName,setUserName] = useState('')
  const [password,setPassword] = useState('')
  const [userNameError,setUserNameError] = useState(false)
  const [passwordError,setPasswordError] = useState(false)
  const [invalidLogin,setInvalidLogin] = useState(false)
  const setInput = (field,e) => {
    if(field === 'username') {
      setUserName(e.target.value)
    }
    else if(field === 'password') {
      setPassword(e.target.value)
    }
  }

  const submit = (e) => {
    e.preventDefault()
    if(userName === ''){
      setUserNameError(true)
    }
    if(userName === ''){
      setPasswordError(true)
      
    }

    if(userName !== '' && password !== ''){
      const user = hardCodedUsers.find((user) => user.userName === userName && password === user.password)
      if(user !== undefined){
        sessionStorage.setItem("userName",userName)
        navigate(-1)
      }
      else {
        setInvalidLogin(true)
      }
    }

    
  }
  return (
    <>
    <form onSubmit={submit}>
    <div className='login-page-container'>
      <h1>Login Page</h1>
        <TextField
          error={userNameError} 
          value = {userName}
          label="Username"
          defaultValue=""
          helperText={ userNameError && 'Invalid Username'}

          className={ userNameError && 'outlined-error'}

          sx={{minWidth:'15%'}}
          onChange={(e) => setInput('username',e)}

        />
        <TextField
          value = {password}
          error={passwordError}
          type='password'
          className={ passwordError && 'password-error'}
          label="Password"
          helperText={ userNameError && 'Invalid Password'}

          defaultValue=""
          sx={{minWidth:'15%'}}
          onChange={(e) => setInput('password',e)}

        />
        <Button sx={{maxWidth:'30%'}} type='submit' variant="contained">Login</Button>
        { invalidLogin && <p style={{color:'red', display:'block', marginTop:'10px', marginBottom:'10px'}}>Invalid login</p>}

      </div>
      </form>
      </>
  )
}
