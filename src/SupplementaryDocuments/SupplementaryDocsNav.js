import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'; // Import Material-UI Button
import './SupplementaryDocsNav.css'; // Import your CSS file

function SupplementaryDocsNav(props) {
  const navigate = useNavigate();

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
        {link:"/PracticeProblems/Loops/ForLoop",name:'For Loops '},
        {link:"/PracticeProblems/Loops/WhileLoop",name:'While Loops '},
      {link:"/PracticeProblems/Loops/DoLoop",name:'Do While Loops '}, 
      {link:"/PracticeProblems/Loops/NestedLoop",name:'Nested Loops'}, 
      {link:'',name:'Hashmap loops'}
      ,{link:'',name:'Infinite loops'}],
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
    <>
      <h1 style={{ color: 'blue' }}>Supplementary Documents</h1>
      <div className="button-container">
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/supplementary-docs/variables')}
          style={{ width: '200px' }} // Set the button width as desired
        >
          Variables
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/supplementary-docs/conditional-statements')}
          style={{ width: '200px' }} // Set the button width as desired
        >
          Conditional Statements
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/supplementary-docs/loops')}
          style={{ width: '200px' }} // Set the button width as desired
        >
          Loops
        </Button>
        
      </div>
    </>
  );
}

export default SupplementaryDocsNav;