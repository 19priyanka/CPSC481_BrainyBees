import React from "react";
import Button from '@mui/material/Button';
import GenericAccordionSelectionPage from "../GenericAccordionSelectionPage.jsx";
import { useNavigate } from 'react-router-dom';

export default function SupplementaryDocs() {
  const navigate = useNavigate();

  const accordionCategories = [
    {
      name: 'Variables',
      children: [],
      Summary: 'Variables Summary'
    },
    {
      name: 'Loops',
      children: [
        { link: "/Supplementary Docs/Loops/ForLoop", name: 'For Loops' },
        { link: "/Supplementary Docs/Loops/WhileLoop", name: 'While Loops' },
        { link: "/Supplementary Docs/Loops/DoLoop", name: 'Do While Loops' },
        {link:"/Supplementary Docs/Loops/NestedLoop",name:'Nested Loops'}, 
        {link:'',name:'Hashmap loops'},
        {link:'',name:'Infinite loops'}
      ],
      Summary: 'Loops Summary'
    },
    {
      name: 'Conditionals',
      children: [],
      Summary: 'Conditionals Summary'
    },
    {
      name: 'Pointers',
      children: [],
      Summary: 'Pointers Summary'
    },
    {
      name: 'Inheritance',
      children: [],
      Summary: 'Inheritance Summary'
    }
  ];

  return (
    <>
      <GenericAccordionSelectionPage accordionCategories={accordionCategories} handleLanguageChange={(value) => { console.log(value) }} title="Supplemental Documents" />
      
      
    </>
  );
}