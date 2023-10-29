import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./GenericSelectionPage.css";
import Button from "@mui/material/Button";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
// links should be an array of objects in this format {link:'link', name:'name'} handle change is how to handle the change in the language
function GenericSelectionPage({ links, handleChange, title }) {
  const navigate = useNavigate();

  const languages = ["C++", "Python", "Java"];
  const def = "C++";

  return (
    <div className="center-vertical" >
    <div class="center">
      <h1 style={{ color: "blue" }}>{title}</h1>
      <div className="container">
        <div className="list">
          {links.map((object, i) => (
            <div className="list-item">
              <Button style={{maxWidth: '11em', maxHeight: '3.5em', minWidth: '11em', minHeight: '3.5em'}} variant="contained" onClick={() => navigate(object.link)}>
                {object.name}
              </Button>
            </div>
          ))}
        </div>
        
      </div>
    </div>
    <Autocomplete
          sx={{ width: 200, marginLeft:10 }}
          options={languages}
          renderInput={(params) => (
            <TextField {...params} label="Language" />
          )}
          onChange={(event, value) => handleChange(value)}
          defaultValue={def}
        />
    </div>
  );
}

export default GenericSelectionPage;
