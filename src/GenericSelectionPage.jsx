import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./GenericSelectionPage.css";
import Button from "@mui/material/Button";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import SideBar from "./SideBar";
import { yellow } from "@mui/material/colors";
// links should be an array of objects in this format {link:'link', name:'name'} handle change is how to handle the change in the language
function GenericSelectionPage({
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
  //const loopOverview = "Loops are control structures in programming that allow you to execute a block of code repeatedly based on a certain condition. In programming, loops are like a magic spell that lets your computer do the same thing over and over again. Imagine you have a list of chores, like washing dishes or sweeping the floor. Instead of telling your computer to do each chore one by one, you can use loops to make your computer do them all with just a few lines of code.";

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
    <div className="center-vertical">
      <div className="center">
        <h1 style={{ color: yellow }}>
          {title}: {language}
        </h1>
        <div className="container">
          <div style={{ marginBottom: "20px" }}>
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              value={search || ""}
              onChange={(e) => {
                searchChange(e);
              }}
            />
          </div>

          <br></br>
          <div className={grid ? "grid" : "list"}>
            {linksToDisplay.map((object, i) => (
              <div className="list-item">
                <Button
                  style={{
                    maxWidth: "11em",
                    maxHeight: "5em",
                    minWidth: "11em",
                    minHeight: "5em",
                  }}
                  variant="contained"
                  onClick={() => navigate(object.link)}
                >
                  {object.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

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
  );
}

export default GenericSelectionPage;
