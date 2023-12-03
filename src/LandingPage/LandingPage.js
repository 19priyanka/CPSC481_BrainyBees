import React from 'react';
import {useNavigate} from "react-router-dom"
import { styled } from '@mui/system';
import { useState, useEffect } from "react";
import { Grid,  Card, CardMedia, CardContent, Typography, CardActions, Button, CardActionArea} from '@mui/material';
import './LandingPage.css';
import FancyBeeFacingLeft from '../bee_icon/png/FancyBeeFacingLeft.png';
import FancyBeeFacingRight from '../bee_icon/png/FancyBeeFacingRight.png';

const StyledCard = styled(CardActionArea)({
  '&:hover': {
    backgroundColor: '#D6FCFB',
  },
});

export default function LandingPage(props) {

  const navigate = useNavigate(); 
  
  const links = [
    {
      name: "Java",
      desc: "Java is like a seasoned traveler in the coding world, created by Sun Microsystems. It's famous for building robust and versatile software. When you use Java, you're often crafting applications for everything from websites and mobile apps to big data processing.",
      image:
        "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png",
      progress: "25%",
    },
    {
      link: "/homescreen",
      name: "C++",
      desc: "C++ is the superhero language born in Bell Laboratories, and it's a powerhouse for creating high-performance applications. If you dream of designing video games, virtual reality experiences, or intricate software systems, C++ is the go-to language that brings those dreams to life.",
      image:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
      progress: "30%",
    },
    {
  
      name: "Python",
      desc: "Python, the friendly language designed by Guido van Rossum, is known for its simplicity and readability. It's a versatile language used for a bit of everything - web development, scientific research, artificial intelligence, and even creating fun little games. When you use Python, you're stepping into a world where creativity knows no bounds.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
      progress: "35%",
    }];
    const [linksToDisplay, setLinksToDisplay] = useState(links);
  return (
<>
    <Grid container spacing={1} className="header">
      <Grid container spacing={1} >
        <Grid item xs={2} className="beeIconFacingRight">
         <img  src={FancyBeeFacingRight} alt="" width="150" height="150"></img> 
        </Grid>
         <Grid item xs={8} className='title'>
        <h1>BrainyBees</h1>
        </Grid>
        <Grid item xs={2} className="beeIconFacingLeft">
         <img  src={FancyBeeFacingLeft} alt="" width="148" height="148"></img> 
        </Grid>
        <Grid item xs={12} className="subtitle">
          <h1> <em>
          Where Learning Takes Flight
            </em> </h1>
          </Grid>
         
     </Grid>
     <Grid container spacing={2}>
     {linksToDisplay.map((object, i) => (
                <Grid item key={i} xs={12} sm={6} md={4} lg={3}> 
                  <Card  style={{ boxShadow: "2px 2px 5px", width:'100%', height:'auto', marginLeft: '300px', marginTop: '50px' }}
                    sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column'  }}>
                    <StyledCard onClick={() => navigate(object.link)}>
                    <CardMedia
                      component="img" // Use the img element as the underlying component
                      alt={object.name}
                      image={object.image}
                      title={object.name}
                      sx={{ objectFit: "contain", flexGrow: 1 }} // Ensure the image covers the container
                      className="custom-image-class" // Add a custom class for styling
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {object.name}
                      </Typography>
                      <div style={{width: '300px', height:'100px', overflow: 'break-word', marginBottom: '50px'}}>
                      <Typography variant="body2" color="text.secondary">
                        {object.desc}
                      </Typography>
                      </div>
                    </CardContent>
                    <CardActions style={{ marginTop: 'auto' }}>
                      <Button
                        size="small"
                        onClick={() => navigate(object.link)}
                      >
                        Start Learning!
                      </Button>
                      <Button
                        className="position-relative float-end"
                        variant="outlined"
                        disabled
                      >
                        {object.progress} Complete
                      </Button>
                    </CardActions>
                    </StyledCard>
                  </Card>
             
                </Grid>
              ))}
</Grid>

    </Grid>
</>
    );
  
   
}





