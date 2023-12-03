import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./GenericSelectionPage.css";
import Button from "@mui/material/Button";
import { Autocomplete, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import SideBar from "./SideBar";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// accordion categories should be an array of objects in this format { name: 'name;summary:'summary' , children: [{link:'link', name:'name'}]} handle change is how to handle the change in the language
function GenericSelectionPage({ accordionCategories, handleLanguageChange, title, grid, imageOption }) {
  const navigate = useNavigate();
  const [search,setSearch] =  useState("");
  const [searchWithinCategory,setSearchWithinCategory] =  useState([]);
  const [accordionCategoriesToDisplay, setAccordionCategoriesToDisplay] = useState(accordionCategories);
  const [linksToDisplay, setLinksToDisplay] = useState({});
  const def = "C++";
  //const loopOverview = "Loops are control structures in programming that allow you to execute a block of code repeatedly based on a certain condition. In programming, loops are like a magic spell that lets your computer do the same thing over and over again. Imagine you have a list of chores, like washing dishes or sweeping the floor. Instead of telling your computer to do each chore one by one, you can use loops to make your computer do them all with just a few lines of code.";


  const [language,setLanguage] = useState(def)

  const searchChangeCategory = (event) => {
    const currentInput = event.target.value
    const filtered = accordionCategories.filter((c) => {
      return c.name.toLowerCase().includes(currentInput.toLowerCase())
    })
    if(currentInput.length > 1){
    const filterByChildren = accordionCategories.filter((c) => 
    {
      return c.children.some((child)=> {
        return child.name.toLowerCase().includes(currentInput.toLowerCase())
      })
    }
    )

    filterByChildren.forEach(c1=> {
      filterWithinCategories(c1,currentInput)
      if(!filtered.find(c => c1.name === c.name)){
        filtered.push(c1)
      }
    }
    );
  }


  
    setSearch(currentInput)

    
  
    setAccordionCategoriesToDisplay(filtered)
    
  }

  const filterWithinCategories = (accordionCategory,currentInput)=> {
    debugger;
    // when filtered, we need to keep track of the original children so we can filter again, otherwise we will lose the original children
    // first time, there are no original children , but after filtering once there will be
    if(!accordionCategory.originalChildren){
      const filtered = accordionCategory.children.filter((c) => {
        return c.name.toLowerCase().includes(currentInput.toLowerCase())
      })
      accordionCategory.originalChildren = accordionCategory.children
      accordionCategory.children = filtered
      }
      else {
          const filtered = accordionCategory.originalChildren.filter((c) => {
              return c.name.toLowerCase().includes(currentInput.toLowerCase())
            })
              accordionCategory.children = filtered
  
      }
  if(accordionCategory.children.length !== 0){
      accordionCategory.expand = true;
  }
     

  }
  // index of accordion category
  const searchWithinCateogryChange = (event,name) => {
    const currentInput = event.target.value
    searchWithinCategory[name] = currentInput
    setSearchWithinCategory({...searchWithinCategory})
   
    const accordionCategory = accordionCategories.find(c=> c.name === name)
    debugger
    
    filterWithinCategories(accordionCategory,currentInput)

    if(!accordionCategoriesToDisplay.find(c => c.name === accordionCategory.name)) {
        setAccordionCategoriesToDisplay([...accordionCategoriesToDisplay,accordionCategory])
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
    // grey out certain lessons
    const username = sessionStorage.getItem('userName')
    if(title.toLowerCase().includes('lessons') && username){
      accordionCategories.forEach(c=> {
        if(c.name.toLowerCase() === 'loops'){
          const whileLoops  = localStorage.getItem("whileLoopsVisited"+username)
          const forLoops = localStorage.getItem("forLoopsVisited"+username)
          c.children.forEach(child=> {
            if((child.name.toLowerCase() === 'for loops' && forLoops) || (child.name.toLowerCase() === 'for loops' && username === 'ben') || (child.name.toLowerCase() === 'while loops' && whileLoops)){
              child.grey = true;
            }
          })
        }
      })
    }

  }, [accordionCategories,handleLanguageChange])

  const setExpanded = (name) => {
    // debugger;
    const accordionCategory = accordionCategories.find(c=> c.name === name)
    accordionCategory.expand = !accordionCategory.expand
    setAccordionCategoriesToDisplay([...accordionCategoriesToDisplay])

  }

  

  const languages = ["C++", "Python", "Java"];

  // trigger event for fefault
    return (
        <div className="padding">
          <h1>{title}: {language}</h1>
            <div className="search-flex">
        <div style={{marginBottom:'20px'}}><TextField id="outlined-basic" label="Search" variant="outlined" value={search || ''} onChange={(e)=> {searchChangeCategory(e)}} /></div>

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
         return <>  <Accordion value={undefined} id={`category-${x.name}`} expanded={x.expand || false}  >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            onClick={()=> {console.log("Expanded Loops");setExpanded(x.name)}}
          >
      
            <Typography variant = "h5">{x.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
           <div style={{ display: 'flex', alignItems: 'center' }}>
          
          {imageOption && x.name === 'Loops' && <Typography variant="h6" style={{marginBottom: '30px'}}>{x.Summary}</Typography>}
           {imageOption && x.name === 'Loops' && <img src="https://miro.medium.com/v2/resize:fit:510/0*urnSq8vQ0xujKwid.jpeg" alt="Description" style={{ maxWidth: '20%', height: '20%' }}></img>}
       
            </div>
            <div style={{marginBottom:'20px'}}><TextField id="outlined-basic" label="Search" variant="outlined" value={searchWithinCategory[x.name] || ''} onChange={(e)=> {searchWithinCateogryChange(e,x.name)}} /></div>

          <div className={grid ? 'grid': 'list'}>
          

          
          <Stack item direction="row" spacing={2}>
        <div style={{display:'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
        <Typography variant="h6">Beginner</Typography>
          </div>
          {x.children.slice(0,3).map((object, i) => (
            <div className="list-item">
              <Button style={object.grey ? {maxWidth: '11em', maxHeight: '5em', minWidth: '11em', minHeight: '5em', backgroundColor:'grey'}  :{maxWidth: '11em', maxHeight: '5em', minWidth: '11em', minHeight: '5em'}} variant="contained" onClick={() => navigate(object.link)}>
                {object.name}
              </Button>
            </div>

          ))}
            </Stack>
            <Stack item direction="row" spacing={2}>
        <div style={{display:'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
        <Typography variant="h6">Advanced</Typography>
          </div>
          {x.children.slice(3,6).map((object, i) => (
            <div className="list-item">
              <Button style={object.grey ? {maxWidth: '11em', maxHeight: '5em', minWidth: '11em', minHeight: '5em', backgroundColor:'grey'}  :{maxWidth: '11em', maxHeight: '5em', minWidth: '11em', minHeight: '5em'}} variant="contained" onClick={() => navigate(object.link)}>
                {object.name}
              </Button>
            </div>

          ))}
            </Stack>
    
        </div>
           
          </AccordionDetails>
        </Accordion>
        </> 
        
        }) }
        
        
       
      </div>
  );
}

export default GenericSelectionPage;
