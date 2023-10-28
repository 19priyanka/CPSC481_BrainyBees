import * as React from 'react';

import GenericSelectionPage from "../GenericSelectionPage.jsx"


function OperatorGames(props) {
   
    const links = [{link:'/games/operators/arthimeticOperators',name:'Operators'},{link:'/games/operators/assignmentOperators',name:'Conditonals'},{link:'/games/operators/logicalOperators',name:'Loops'}]
    

    return (
        <>
      
      <GenericSelectionPage links={links} handleChange={(value)=> {console.log(value)}}/>

    </>
    )
}


export default OperatorGames;