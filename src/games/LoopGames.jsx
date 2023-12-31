import * as React from 'react';

import GenericSelectionPage from "../GenericSelectionPage.jsx"
import ShowPath from '../Showpath';


function GamesNavigationConcept(props) {
   
    const links = [{link:'/games/loops/forloopgame',name:'For Loop Game'},{link:'/games/loops/whileloopgame',name:'While Loop Game'},
    {link:'/games/loops',name:'Do While Loop Game'}, {link:'/games/loops',name:'Nested Loop Game'}, {link:'/games/loops',name:'Hashmap loops'}
    , {link:'/games/loops',name:'Infinite loop Game'}]
    

    return (
        <div className='game-container'>
      <ShowPath></ShowPath>

      <GenericSelectionPage links={links} handleLanguageChange={(value)=> {console.log(value)}} title="Loops" grid={true}/>

    </div>
    )
}


export default GamesNavigationConcept;