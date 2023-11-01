import * as React from 'react';

import { useEffect, useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function ShowPath(props) {
    const navigate = useNavigate();

    const [path, setPath] = useState([]);
   //gives links to each page in the path the user took, for example if the user went to /games/operators/arthimeticOperators the component would return a list of links to /games, /games/operators, and /games/operators/arthimeticOperators
    useEffect(() => 
    {
        //workaround for strange bug if you clicked the back button to get to the page
        setTimeout(()=>{
        const pathname = window.location.pathname;
        // cut off last element since we're already on that page
        //each element in the path is the current path + the one before it
        let pathArray = pathname.split('/')
        //remove the first element because it's empty and cut off last element since we're already on that page
        pathArray.pop();
        pathArray.shift();
        // formats it with the link, and the name of the page. example would be {link:'/games/operators/arthimeticOperators',name:'Operators'}
        let linkObjArray = [];

         pathArray.forEach((name,index) => {
            let link = '/'+name;
            if(index !== 0){
                link = linkObjArray[index-1].link + link;
            }
            linkObjArray.push({link,name});
        })
        setPath(linkObjArray);
        },0)
        
        
        
    }, [])
    

    return (
    <>
        {path.map((pathObj,index) => {
           
               if(index !== path.length-1){
                return(<>
                <Button variant="text" onClick={() => navigate(pathObj.link)}>{pathObj.name}<ArrowForwardIcon></ArrowForwardIcon></Button>
                </>)
                }
                else {
                    return(<>
                    <Button variant="text" onClick={() => navigate(pathObj.link)}>{pathObj.name}</Button>
                    </>)
                }
            
            
        })}

    </>
    )
}


export default ShowPath;