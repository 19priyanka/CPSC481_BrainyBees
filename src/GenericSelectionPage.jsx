import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./GenericSelectionPage.css";
import Button from "@mui/material/Button";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
// links should be an array of objects in this format {link:'link', name:'name'} handle change is how to handle the change in the language
function GenericSelectionPage({ links, handleLanguageChange, title, grid }) {
  const navigate = useNavigate();
  const [search,setSearch] =  useState("");
  const [linksToDisplay, setLinksToDisplay] = useState(links);
  const def = "C++";

  const [language,setLanguage] = useState(def)

  const searchChange = (event) => {
    const currentInput = event.target.value
  
    const filteredLinks = links.filter((link) => {
      return link.name.toLowerCase().includes(currentInput)
    })

    setSearch(currentInput)
    setLinksToDisplay(filteredLinks)
    
  }
 // send default value
  useEffect(()=>{
    if(handleLanguageChange){
    handleLanguageChange(def)
    }
  }, [])

  

  const languages = ["C++", "Python", "Java"];

  // trigger event for fefault
    return (
    <div className="center-vertical" >
    <div className="center">
      <h1>{title}: {language}</h1>
      <div className="container">
        <div style={{marginBottom:'20px'}}><TextField id="outlined-basic" label="Search" variant="outlined" value={search || ''} onChange={(e)=> {searchChange(e)}} /></div>
       
        <div className={grid ? 'grid': 'list'}>
          {linksToDisplay.map((object, i) => (
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
          value = {language}
          renderInput={(params) => (
            <TextField {...params} label="Change Language" />
          )}
          onChange={(event, value) => {
            handleLanguageChange(value)
            setLanguage(value)
          }}
          defaultValue={def}
        />
          
    </div>
  );
}

export default GenericSelectionPage;
