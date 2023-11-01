import * as React from 'react';

import GenericSelectionPage from "../GenericSelectionPage.jsx"

import ShowPath from '../Showpath';

function GamesNavigationConcept(props) {
   
    const links = [{link:'/games/operators',name:'Operators'},{link:'/games/conditionals',name:'Conditonals'},{link:'/games/loops',name:'Loops'}, 
    {link:'/games',name:'Object Oriented Programming'} ,{link:'/games',name:'Pointers'},{link:'/games',name:'Memory Management'},
    {link:'/games',name:'Variables'} ,{link:'/games',name:'File IO'},{link:'/games',name:'C++ Templates'},
    {link:'/games',name:'Maps Data Structure'} ,{link:'/games',name:'Array Data Structure'},{link:'/games',name:'C++ Strings'},
  ]
    

    return (
        <>
      <ShowPath></ShowPath>

      <GenericSelectionPage links={links} handleLanguageChange={(value)=> {console.log(value)}} title="Games" grid={true}/>

    </>
    )
}


export default GamesNavigationConcept;