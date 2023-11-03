import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Box,
} from '@mui/material';
import PieChart from './ProfilePagePieChart';
import ProgressBar from './ProfilePageProgessBar';

const UserProfile = () => {
  const [fullName, setFullName] = useState('Ben Johnson');
  const [email, setEmail] = useState('ben@example.com');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFullNameEdit = () => {
    // Handle full name edit here
  };

  const handleEmailEdit = () => {
    // Handle email edit here
  };

  const handleChangePassword = () => {
    // Handle password change here
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Ben Johnson's Profile
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Full name:</Typography>
          <TextField
            variant="outlined"
            fullWidth
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <Box mt={2}></Box>
          <Button
            variant="contained"
            size="small"
            onClick={handleFullNameEdit}
          >
            Edit
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">Email:</Typography>
          <TextField
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
         <Box mt={2}/>
          <Button variant="contained" size="small" onClick={handleEmailEdit}>
            Edit
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">Change Password:</Typography>
          <TextField
            type="password"
            label="New Password"
            fullWidth
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <TextField
            type="password"
            label="Confirm Password"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Box mt={2}></Box>
          <Button
            variant="contained"
            size="small"
            onClick={handleChangePassword}
          >
            Change Password
          </Button>
        </Grid>
      </Grid>

      <Box mt={4}>
        <Typography variant="h5">Progress Chart:</Typography>
        <Paper elevation={3} style={{ padding: '1rem' }}>
         <PieChart/>
        </Paper>
      </Box>

      <Box mt={4}>
        <Typography variant="h5">Completed Items:</Typography>
        <Paper elevation={3} style={{ padding: '1rem' }}>
         <ProgressBar 
         name={'Lessons'}
        progress={50} />
        <Box mt={1}/>
        <ProgressBar 
         name={'Games'}
        progress={30} />
           <Box mt={1}/>
        <ProgressBar 
         name={'Quizzes'}
        progress={10} />
           <Box mt={1}/>
        <ProgressBar 
         name={'Practice Problems'}
        progress={60} />
        </Paper>
      </Box>
    </Container>
  );
};

export default UserProfile;
