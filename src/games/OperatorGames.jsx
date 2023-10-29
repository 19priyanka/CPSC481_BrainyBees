import * as React from 'react';

import GenericSelectionPage from "../GenericSelectionPage.jsx"
import GenericBanner from '../GenericBanner.jsx';


function OperatorGames(props) {
   
    const links = [{link:'/games/operators/arthimeticOperators',name:'Operators'},{link:'/games/operators/assignmentOperators',name:'Conditonals'},{link:'/games/operators/logicalOperators',name:'Loops'}]
    

    return (
        <>
      <GenericBanner></GenericBanner>
      <GenericSelectionPage links={links} handleChange={(value)=> {console.log(value)}} title="Operators"/>

    </>
    )
}


export default OperatorGames;