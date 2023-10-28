import * as React from 'react';

import GenericSelectionPage from "../GenericSelectionPage.jsx"


function CondtionalGames(props) {
   
    const links = [{link:'/games/operators',name:'Operators'},{link:'/games/conditionals',name:'Conditonals'},{link:'/games/loops',name:'Loops'}]
    

    return (
        <>
      
      <GenericSelectionPage links={links} handleChange={(value)=> {console.log(value)}}/>

    </>
    )
}


export default CondtionalGames;