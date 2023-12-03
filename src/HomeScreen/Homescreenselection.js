import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Homescreenselection.css";
import Button from "@mui/material/Button";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// links should be an array of objects in this format {link:'link', name:'name'} handle change is how to handle the change in the language
function Homescreenselection({
  links,
  handleLanguageChange,
  title,
  grid,
  lessonsLoops,
}) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [linksToDisplay, setLinksToDisplay] = useState(links);
  const def = "C++";
  const loopOverview =
    "Loops are control structures in programming that allow you to execute a block of code repeatedly based on a certain condition. In programming, loops are like a magic spell that lets your computer do the same thing over and over again. Imagine you have a list of chores, like washing dishes or sweeping the floor. Instead of telling your computer to do each chore one by one, you can use loops to make your computer do them all with just a few lines of code.";

  const [language, setLanguage] = useState(def);

  const searchChange = (event) => {
    const currentInput = event.target.value;

    const filteredLinks = links.filter((link) => {
      return link.name.toLowerCase().includes(currentInput);
    });

    setSearch(currentInput);
    setLinksToDisplay(filteredLinks);
  };
  // send default value
  useEffect(() => {
    if (handleLanguageChange) {
      handleLanguageChange(def);
    }
  }, []);

  const languages = ["C++", "Python", "Java"];

  // trigger event for fefault
  return (
    <div className="center-vertical d-block mt-0">
     
      <div style={{ textAlign: "center" }} className="center d-block">
        <h1 style={{ position: "relative", left: "0%", marginBottom:'1em' }}>
          {title}: {language}
        </h1>
        <div className="container">
          <div
            style={{ display: "flex", position: "relative", left: "50%", marginBottom: "20px" }}
          >
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              value={search || ""}
              onChange={(e) => {
                searchChange(e);
              }}
            />
             <Autocomplete
        sx={{ width: 200, marginLeft: 10 }}
        options={languages}
        value={language}
        renderInput={(params) => (
          <TextField {...params} label="Change Language" />
        )}
        onChange={(event, value) => {
          handleLanguageChange(value);
          setLanguage(value);
        }}
        defaultValue={def}
      />
          </div>

         

          {lessonsLoops && (
            <div className="loop-description-box">
              <h2>What are Loops?</h2>
              <p>Loops are {loopOverview}</p>
            </div>
          )}
          <br></br>
          <section>
            <div
              style={{ position: "relative", left: "15%" }}
              className={grid ? "grid" : "list"}
            >
              {linksToDisplay.map((object, i) => (
                <div className="list-item">
                  <Card
                    style={{ boxShadow: "2px 2px 5px" }}
                    sx={{ maxWidth: 345 }}
                  >
                    <CardMedia
                      component="img" // Use the img element as the underlying component
                      alt="green iguana"
                      image={object.image}
                      title="green iguana"
                      sx={{ objectFit: "cover" }} // Ensure the image covers the container
                      className="custom-image-class" // Add a custom class for styling
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {object.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {object.desc}
                      </Typography>
                    </CardContent>
                    <CardActions>
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
                  </Card>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      
    </div>
  );
}

export default Homescreenselection;
