  import { Grid, Button, Typography, List, ListItem, Dialog, DialogActions, DialogTitle, Slide } from "@mui/material";
  import * as React from "react";
  import { useNavigate } from "react-router-dom";
  import { useEffect } from "react";
  import ShowPath from "../Showpath.jsx";
  import "./LessonLoopsForLoops.css";

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  function LessonsLoopsForLoops() {
    //change this later, just an example right now
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const username = sessionStorage.getItem('userName');

    localStorage.setItem("forLoopsVisited"+username, "true");

  }, []);

    
    return (
      <>
      <ShowPath></ShowPath>
      <Grid container spacing={2}>
      {/* Title */}
      <Grid item xs={12} >
      <div className="Padding"> 
      <h1>For Loop</h1>
      </div>
      </Grid>
      
      {/* Video */}
      <Grid item xs={12} justifyContent="center">
      <div className="Padding">
      <div className="video"> 
      {/* Embed your video component here */}
      <iframe
      title="Loop Video"
      width="75%"
      height="400"
      src="https://www.youtube.com/embed/ZeqJewFm7zc"
      
      allowfullscreen
      light={true}
      ></iframe>
      </div>
      </div>
      </Grid>
      
      {/* Summary Text */}
      <Grid item xs={12}>
      <div className="Padding"> 
      <Typography variant="h6" style={{marginBottom:'20px'}}>
      Here's a brief summary of the video content. Loops are powerful
      control structures that allow you to repeat a sequence of
      instructions multiple times based on a specific condition.
      </Typography>
    
      </div>
      </Grid>
      
      
      
      {/* Download Video Notes Button */}
      <Grid item xs={6}>
      <div className="Padding"> 
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
      Download Video Notes
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Your download was successful!"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
  
        </DialogActions>
      </Dialog>
      </div>
      </Grid>
      
      {/* While Loops Arrow Button */}
      <Grid item xs={6} container justifyContent="flex-end">
      <div className="PaddingRight"> 
      <Button
      variant="outlined"
      color="primary"
      startIcon={<span>&#8594;</span>}
      onClick = {()=>navigate("/Lessons/Loops/WhileLoop")}
      >
      While Loops
      </Button>
      </div>
      </Grid>
      </Grid>
      <div style={{marginBottom:'50px'}}>
      
      </div>
      
      
      <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
      <div className="Padding">
      <Typography variant="h5" style={{ marginBottom: '40px' }}>Key Takeaway </Typography>
      <Typography variant="h6" style={{marginBottom: '60px'}}>
      Remember, loops are like magic spells in coding! They help the computer
      do things over and over again. Here's a magical key takeaway:
      </Typography>
      <Typography variant="h5">
      <b> Just like a magician waves a wand to make magic happen, programmers use loops
      to make the computer do amazing things again and again! Keep coding, little wizard! </b>
      </Typography>
      </div>
      </Grid>
      <Grid item xs={12} md={6}>
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <img
      src="https://images.tynker.com/blog/wp-content/uploads/20190118123145/loops-blog.png"
      alt=""
      style={{ marginTop: '40px', width: '60%', height: '40%' }}
      />
      </div>
      </Grid>
      </Grid>
      
      
      {/* Key Things to Note about For Loops in C++ */}
      <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
      <div className="Padding">
      <Typography variant="h5" style={{ marginTop: '60px', marginBottom: '40px' }}>Key Things to Note about For Loops in C++</Typography>
      
      <Typography variant="h6">
      <List>
      <ListItem>- C++ `for` loops have three parts: initialization, condition, and update.</ListItem>
      <ListItem>- The loop runs as long as the condition is true.</ListItem>
      <ListItem>- Use curly braces {'{}'} to enclose the code block inside the loop.</ListItem>
      <ListItem>- Remember to increment or decrement the loop control variable to avoid an infinite loop.</ListItem>
      <ListItem>- Example:<b> &nbsp; for {'(int i = 0; i < 5; i++)'}</b></ListItem>
      </List>
      </Typography>
      </div>
      </Grid>
      <Grid item xs={12} md={6}>
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <img
      src="https://code.org/curriculum/course4/8/loop.png"
      alt=""
      style={{ marginTop: '120px', width: '75%', height: 'auto' }}
      />
      </div>
      </Grid>
      </Grid>
      </>
      );
    }
    
    export default LessonsLoopsForLoops;
