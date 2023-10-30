import * as React from 'react';

import GenericSelectionPage from "../GenericSelectionPage.jsx"
import ShowPath from '../Showpath';


function OperatorGames(props) {
   
    const links = [{link:'/games/operators/arthimeticOperators',name:'Operators'},{link:'/games/operators/assignmentOperators',name:'Conditonals'},{link:'/games/operators/logicalOperators',name:'Loops'}]
    

    return (
        <>
      <ShowPath></ShowPath>

      <GenericSelectionPage links={links} handleLanguageChange={(value)=> {console.log(value)}} title="Operators"/>

    </>
    )
}


export default OperatorGames;