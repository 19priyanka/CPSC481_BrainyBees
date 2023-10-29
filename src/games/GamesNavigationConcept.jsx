import * as React from 'react';

import GenericSelectionPage from "../GenericSelectionPage.jsx"
import GenericBanner from '../GenericBanner.jsx';


function GamesNavigationConcept(props) {
   
    const links = [{link:'/games/operators',name:'Operators'},{link:'/games/conditionals',name:'Conditonals'},{link:'/games/loops',name:'Loops'}]
    

    return (
        <>
      <GenericBanner></GenericBanner>
      <GenericSelectionPage links={links} handleChange={(value)=> {console.log(value)}} title="Games"/>

    </>
    )
}


export default GamesNavigationConcept;