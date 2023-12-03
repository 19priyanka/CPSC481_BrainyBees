import React from "react";
import GenericSelectionPage from "../GenericSelectionPage";
import GenericAccordionSelectionPage from "../GenericAccordionSelectionPage.jsx"

export default function LessonsLanding() {
  /*const links = [
    { link: "/Lessons/Loops", name: "Loops" },
    { link: "/Lessons/Variables", name: "Variables" },
    { link: "/Lessons/Conditionals", name: "Conditionals" },
    { link: "/Lessons/Conditionals", name: "Lists" },
    { link: "/Lessons/Conditionals", name: "Pointers" },
    { link: "/Lessons/Conditionals", name: "Inheritance" },
    { link: "/Lessons/Conditionals", name: "I/O" },
  ];*/

  const links = [
    { link: "/Lessons/Loops/ForLoop", name: "For Loop" },
    { link: "/Lessons/Loops/WhileLoop", name: "While Loop" },
    { link: "/Lessons/Loops/DoLoop", name: "Do Loop" },
    { link: "/Lessons/Loops/NestedLoop", name: "Nested Loop" },
  ];
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
        {link:"/Lessons/Loops/ForLoop",name:'For Loops'},
        {link:"/Lessons/Loops/WhileLoop",name:'While Loops'},
      {link:"/Lessons/Loops/DoLoop",name:'Do While Loops'}, 
      {link:"/Lessons/Loops/NestedLoop",name:'Nested Loops'}, 
      {link:'',name:'Hashmap loops'}
      ,{link:'',name:'Infinite loops'}],
      Summary:'Loops are control structures in programming that allow you to execute a block of code repeatedly based on a certain condition. In programming, loops are like a magic spell that lets your computer do the same thing over and over again. Imagine you have a list of chores, like washing dishes or sweeping the floor. Instead of telling your computer to do each chore one by one, you can use loops to make your computer do them all with just a few lines of code.'

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
    <GenericAccordionSelectionPage grid imageOption accordionCategories={accordionCategories} handleLanguageChange={(value)=> {console.log(value)}} title="Lessons" />

    </>
  );
}
