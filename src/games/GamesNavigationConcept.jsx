import * as React from 'react';
import './games.css';
import GenericSelectionPage from "../GenericSelectionPage.jsx"
import GenericAccordionSelectionPage from "../GenericAccordionSelectionPage.jsx"
import ShowPath from '../Showpath';

function GamesNavigationConcept(props) {
   
    const links = [{link:'/games/operators',name:'Operators'},{link:'/games/conditionals',name:'Conditonals'},{link:'/games/loops',name:'Loops'}, 
    {link:'/games',name:'Object Oriented Programming'} ,{link:'/games',name:'Pointers'},{link:'/games',name:'Memory Management'},
    {link:'/games',name:'Variables'} ,{link:'/games',name:'File IO'},{link:'/games',name:'C++ Templates'},
    {link:'/games',name:'Maps Data Structure'} ,{link:'/games',name:'Array Data Structure'},{link:'/games',name:'C++ Strings'},
  ]
    const accordionCategories = [
      {
        name:'Operators',
        children:[


        ],
        Summary:'Operators summary'

      },
      {
        name:'Loops',
        children:[
          {link:'/games/loops/forloopgame',name:'For Loop Game'},{link:'/games/loops/whileloopgame',name:'While Loop Game'},
        {link:'/games/loops',name:'Do While Loop Game'}, 
        {link:'/games/loops',name:'Nested Loop Game'}, 
        {link:'/games/loops',name:'Hashmap loops'}
        ,{link:'/games/loops',name:'Infinite loop Game'}],
        Summary:'Loops Summary'

      },
      {
        name:'File IO',
        children:[],
        Summary:'File IO summary'

      },
      {
        name:'Conditionals',
        children:[],
        Summary:'Conditionals summary'

      },


    ]

    return (
        <div className='game-container'>
      <ShowPath></ShowPath>

      <GenericAccordionSelectionPage accordionCategories={accordionCategories} handleLanguageChange={(value)=> {console.log(value)}} title="Games" grid={true}/>

    </div>
    )
}


export default GamesNavigationConcept;