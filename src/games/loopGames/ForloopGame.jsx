import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import './ForLoopGame.css'
import Button from '@mui/material/Button';


function ForloopGame(props) {

    const [circleColoredInCount, setColoredInCount] = useState(0);
    const submitSolution = ()=> {
       
    }
    const [initalizeIndex,setIntializeIndex] = useState('');
    const [loopConditionLeft,setLoopConditionLeft] = useState('');
    const [loopConditionRight,setLoopConditionRight] = useState('');
    const [incrementIndex,setIncrementIndex] = useState('');


    return (
        <>
      <div>Complete the code such that only 5 of the circles are filled after running the code</div>
        <div className="margin-top margin-bottom box">
        &#40;<code>  for int i =  </code><input value={initalizeIndex}/>
            <code>; </code><input value={loopConditionLeft}/>
            <code>&#60;</code>
            <input value={loopConditionRight}/>

            <code>;</code>
            <input value={incrementIndex}/>
            <code>++</code>
            <code>&#41;</code>
            <code>&#123;</code>
            <code style={{display: "block"}}>fillNextCircle&#40;&#41;</code>
            <code style={{display: "block"}} >&#125;</code>
        </div>
        <Button className='margin-top' variant="contained" onClick={() => submitSolution()}>Submit</Button>

        <div className="margin-top flex">
        {
            Array.from({length: circleColoredInCount}).map(() => {
                return <div className="circle red"></div>
            })
        }
        {
            Array.from({length: 6-circleColoredInCount}).map(() => {
                return <div className="circle"></div>
            })
        }
        </div>
    </>
    )
}


export default ForloopGame;