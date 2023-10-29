import * as React from 'react';

import GenericSelectionPage from "../GenericSelectionPage.jsx"
import GenericBanner from '../GenericBanner.jsx';

import ShowPath from '../../Showpath';

function CondtionalGames(props) {
   
    const links = [{link:'/games/operators',name:'Operators'},{link:'/games/conditionals',name:'Conditonals'},{link:'/games/loops',name:'Loops'}]
    

    return (
        <>
      <GenericBanner></GenericBanner>
      <ShowPath></ShowPath>

      <GenericSelectionPage links={links} handleChange={(value)=> {console.log(value)}} title="Conditionals"/>

    </>
    )
}


export default CondtionalGames;