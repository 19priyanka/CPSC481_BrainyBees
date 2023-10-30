import * as React from 'react';
import { useState } from 'react';
import './ForLoopGame.css'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShowPath from '../../Showpath';
function ForloopGame(props) {
    const navigate = useNavigate();


    const [circleColoredInCount, setColoredInCount] = useState(0);
    const submitSolution = ()=> {
       
    }

    const showHint = () => {
    }
    const [initalizeIndex,setIntializeIndex] = useState('');
    const [loopConditionLeft,setLoopConditionLeft] = useState('');
    const [loopConditionRight,setLoopConditionRight] = useState('');
    const [incrementIndex,setIncrementIndex] = useState('');


    return (
        <>
      <ShowPath></ShowPath>
      <h1>For Loop Game</h1>
     

      <div className="description">
      <div>Complete the code such that only 5 of the circles are filled after running the code</div>
      <Button variant="contained" onClick={() => showHint()}>Hint</Button>
      </div>
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
        <div className="footer"><Button variant="text" onClick={() => navigate("/games/loops/whileloopgame")}>Next Game <ArrowForwardIcon></ArrowForwardIcon> </Button></div>
    </>
    )
}


export default ForloopGame;