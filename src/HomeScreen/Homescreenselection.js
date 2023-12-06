import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Homescreenselection.css";
import Button from "@mui/material/Button";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
} from "@mui/material";

import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const StyledCard = styled(CardActionArea)({
  "&:hover": {
    backgroundColor: "#D6FCFB",
  },
});

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
  const [isUser, setIsUser] = useState(false);
  const def = "C++";
  const loopOverview =
    "Loops are control structures in programming that allow you to execute a block of code repeatedly based on a certain condition. In programming, loops are like a magic spell that lets your computer do the same thing over and over again. Imagine you have a list of chores, like washing dishes or sweeping the floor. Instead of telling your computer to do each chore one by one, you can use loops to make your computer do them all with just a few lines of code.";

  const [language, setLanguage] = useState(def);

  const searchChange = (event) => {
    const currentInput = event.target.value;

    const filteredLinks = links.filter((link) => {
      return link.name.toLowerCase().includes(currentInput.toLowerCase());
    });

    setSearch(currentInput);
    setLinksToDisplay(filteredLinks);
  };
  // send default value
  useEffect(() => {
    if (handleLanguageChange) {
      handleLanguageChange(def);
    }
    const userName = sessionStorage.getItem("userName");
    if (userName) {
      setIsUser(true);
    }
    else {
      setIsUser(false);
    }
  }, []);

  const languages = ["C++", "Python", "Java"];

  // trigger event for fefault
  return (
    <div className="cards center-vertical d-block mt-0">
      <div style={{ textAlign: "center" }} className="center d-block">
        <h1 style={{ position: "relative", left: "0%", marginBottom: "1em" }}>
          {title}: {language}
        </h1>
        <div className="container1">
          <div
            style={{
              display: "flex",
              position: "relative",
              left: "50%",
              marginBottom: "20px",
            }}
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
                    <StyledCard onClick={() => navigate(object.link)}>
                      <CardMedia
                        component="img" // Use the img element as the underlying component
                        image={object.image}
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
                        {isUser && 
                        <Button
                          className="position-relative float-end"
                          variant="outlined"
                          disabled
                        >
                          {object.progress} Complete
                        </Button>
                          }
                      </CardActions>
                    </StyledCard>
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
