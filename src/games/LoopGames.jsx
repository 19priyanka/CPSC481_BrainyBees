import * as React from 'react';

import GenericSelectionPage from "../GenericSelectionPage.jsx"


function GamesNavigationConcept(props) {
   
    const links = [{link:'/games/loops/forloopgame',name:'For Loop Game'},{link:'/games/loops/whileloopgame',name:'While Loop Game'}]
    

    return (
        <>
      
      <GenericSelectionPage links={links} handleChange={(value)=> {console.log(value)}}/>

    </>
    )
}


export default GamesNavigationConcept;