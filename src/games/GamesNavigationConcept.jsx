import * as React from 'react';

import GenericSelectionPage from "../GenericSelectionPage.jsx"
import GenericBanner from '../GenericBanner.jsx';

import ShowPath from '../Showpath';

function GamesNavigationConcept(props) {
   
    const links = [{link:'/games/operators',name:'Operators'},{link:'/games/conditionals',name:'Conditonals'},{link:'/games/loops',name:'Loops'}, 
    {link:'/games',name:'Objects'} ,{link:'/games',name:'Pointers'},{link:'/games',name:'Memory'},
    {link:'/games',name:'Variables'} ,{link:'/games',name:'File IO'},{link:'/games',name:'Constructors'},
    {link:'/games',name:'Maps'} ,{link:'/games',name:'Vectors'},{link:'/games',name:'Inheritance'},
  ]
    

    return (
        <>
      <GenericBanner></GenericBanner>
      <ShowPath></ShowPath>

      <GenericSelectionPage links={links} handleChange={(value)=> {console.log(value)}} title="Games" grid={true}/>

    </>
    )
}


export default GamesNavigationConcept;