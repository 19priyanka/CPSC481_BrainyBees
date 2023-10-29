import * as React from 'react';

import GenericSelectionPage from "../GenericSelectionPage.jsx"
import GenericBanner from '../GenericBanner.jsx';
import ShowPath from '../Showpath';


function GamesNavigationConcept(props) {
   
    const links = [{link:'/games/loops/forloopgame',name:'For Loop Game'},{link:'/games/loops/whileloopgame',name:'While Loop Game'}]
    

    return (
        <>
      <GenericBanner></GenericBanner>
      <ShowPath></ShowPath>

      <GenericSelectionPage links={links} handleChange={(value)=> {console.log(value)}} title="Loops"/>

    </>
    )
}


export default GamesNavigationConcept;