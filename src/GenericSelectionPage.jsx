import * as React from 'react';
import {useNavigate} from "react-router-dom"
import './GenericSelectionPage.css'
import Button from '@mui/material/Button';
function GenericSelectionPage({links}) {
    // links should be an array of objects in this format {link:'link', name:'name'} 
    const navigate = useNavigate(); 
  
    return (
        <>
     
        <div class="list">
                {links.map((object, i) => <div class="list-item"  > 
                        <Button variant="contained" onClick={() => navigate(object.link)}>{object.name}</Button>
                </div>)}
        </div>
      
        
    </>
    )
}


export default GenericSelectionPage;