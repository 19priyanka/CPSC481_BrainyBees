import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./GenericSelectionPage.css";
import Button from "@mui/material/Button";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import SideBar from "./SideBar";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// accordion categories should be an array of objects in this format { name: 'name;summary:'summary' , children: [{link:'link', name:'name'}]} handle change is how to handle the change in the language
function GenericSelectionPage({ accordionCategories, handleLanguageChange, title, grid, lessonsLoops }) {
  const navigate = useNavigate();
  const [search,setSearch] =  useState("");
  const [searchWithinCategory,setSearchWithinCategory] =  useState([]);
  const [accordionCategoriesToDisplay, setAccordionCategoriesToDisplay] = useState(accordionCategories);
  const [linksToDisplay, setLinksToDisplay] = useState({});
  const def = "C++";
  const loopOverview = "Loops are control structures in programming that allow you to execute a block of code repeatedly based on a certain condition. In programming, loops are like a magic spell that lets your computer do the same thing over and over again. Imagine you have a list of chores, like washing dishes or sweeping the floor. Instead of telling your computer to do each chore one by one, you can use loops to make your computer do them all with just a few lines of code.";


  const [language,setLanguage] = useState(def)

  const searchChangeCategory = (event) => {
    const currentInput = event.target.value
  
    const filtered = accordionCategories.filter((c) => {
      return c.name.toLowerCase().includes(currentInput)
    })

    setSearch(currentInput)
  

    setAccordionCategoriesToDisplay(filtered)
    
  }
  // index of accordion category
  const searchWithinCateogryChange = (event,name) => {
    const currentInput = event.target.value
    searchWithinCategory[name] = currentInput
    setSearchWithinCategory({...searchWithinCategory})
   
    const accordionCategory = accordionCategories.find(c=> c.name === name)
    // when filtered, we need to keep track of the original children so we can filter again, otherwise we will lose the original children
    // first time, there are no original children , but after filtering once there will be
    if(!accordionCategory.originalChildren){
    const filtered = accordionCategory.children.filter((c) => {
      return c.name.toLowerCase().includes(currentInput)
    })
    accordionCategory.originalChildren = accordionCategory.children
    accordionCategories.children = filtered
    }
    else {
        const filtered = accordionCategory.originalChildren.filter((c) => {
            return c.name.toLowerCase().includes(currentInput)
          })
            accordionCategory.children = filtered

    }
    

  }

 // send default value
  useEffect(()=>{
    if(handleLanguageChange){
    handleLanguageChange(def)
    }
    const searchCategoriesObj = {}
    accordionCategories.forEach(c=> {
        searchCategoriesObj[c.name] = ''
    })
    setSearchWithinCategory(searchCategoriesObj)

  }, [accordionCategories,handleLanguageChange])

  

  const languages = ["C++", "Python", "Java"];

  // trigger event for fefault
    return (
        <div>
            <div className="search-flex">
        <div style={{marginBottom:'20px'}}><TextField id="outlined-basic" label="Search Categories" variant="outlined" value={search || ''} onChange={(e)=> {searchChangeCategory(e)}} /></div>

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
            { 
        accordionCategoriesToDisplay.map((x,index)=> {
         return <>  <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{x.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p>{x.summary}</p>
            <div style={{marginBottom:'20px'}}><TextField id="outlined-basic" label="Search" variant="outlined" value={searchWithinCategory[x.name] || ''} onChange={(e)=> {searchWithinCateogryChange(e,x.name)}} /></div>

          <div className={grid ? 'grid': 'list'}>
          {x.children.map((object, i) => (
            <div className="list-item">
              <Button style={{maxWidth: '11em', maxHeight: '5em', minWidth: '11em', minHeight: '5em'}} variant="contained" onClick={() => navigate(object.link)}>
                {object.name}
              </Button>
            </div>
          ))}
        </div>
           
          </AccordionDetails>
        </Accordion>
        </> 
        
        }) }
        
        
       
      </div>
  );
}

export default GenericSelectionPage;
