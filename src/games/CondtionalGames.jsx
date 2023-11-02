import * as React from 'react';

import GenericSelectionPage from "../GenericSelectionPage.jsx"

import ShowPath from '../../Showpath';

function CondtionalGames(props) {
   
    const links = [{link:'/games/operators',name:'Operators'},{link:'/games/conditionals',name:'Conditonals'},{link:'/games/loops',name:'Loops'}]
    

    return (
        <>
      <ShowPath></ShowPath>

      <GenericSelectionPage links={links} handleLanguage={(value)=> {console.log(value)}} title="Conditionals"/>

    </>
    )
}


export default CondtionalGames;