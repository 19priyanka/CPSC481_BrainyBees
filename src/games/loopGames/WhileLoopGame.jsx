import * as React from 'react';
import { useState } from 'react';
import './ForLoopGame.css'
import Button from '@mui/material/Button';
import GenericBanner from '../../GenericBanner.jsx';
import { useNavigate } from "react-router-dom";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShowPath from '../../Showpath';

function WhileloopGame(props) {

    const navigate = useNavigate();


    const [redPosition, setRedPosition] = useState(1);
    const [bluePosition, setBluePosition] = useState(0);
    const [loopCondition, setLoopCondition] = useState(''); 
    const [loopInsideCode,setLoopInsideCode] = useState('');
    const numOfSpaces = 10;
    const submitSolution = ()=> {
       
    }
    const showHint = () => {
    }

    return (
        <>
      <GenericBanner></GenericBanner>
      <ShowPath></ShowPath>

      <h1>While Loop Game</h1>
      <div className="description">
      <div>Complete the Loop condition such that red dot runs away from the blue dot if the blue dot is 1 space away from the red dot</div>
      <Button variant="contained" onClick={() => showHint()}>Hint</Button>
      </div>
        <div className="margin-top margin-bottom box">
            <code>void redDotRunAway&#40;&#41; </code> <code>&#123;</code>
            <code style={{display: "block"}}>runAway&#40;&#41;;</code>
            <code style={{display: "block"}} >&#125;</code>
            <br></br>
            <code>int main&#40;&#41; </code> <code>&#123;</code>
            <code style={{display: "block"}}>  int redPosition = 1; </code>
            <code style={{display: "block"}}>  int bluePositionPosition = 0; </code>
            <code style={{display: "block"}}>moveBlue&#40;&#41; ;</code>


            <code  style={{display: "block"}}>  while &#40;   <input value={loopCondition} /> <code>&#41;</code>  </code>
          

            
            <code style={{display: "block"}} >&#123;</code>
            <input value={loopCondition}/>
            <code style={{display: "block"}} >&#125;</code>
            

            <code style={{display: "block"}} >return 0;</code>

            <code style={{display: "block"}} >&#125;</code>


        </div>
        <Button className='margin-top' variant="contained" onClick={() => submitSolution()}>Submit</Button>

        <div className="margin-top flex" >
        {
            Array.from({length: numOfSpaces}).map((value,index) => {
                if(index === redPosition){
                    return <div class="grid-box"><div className="circle red"></div></div>
                }
                else if(index === bluePosition){
                    return <div class="grid-box"><div className="circle blue"></div></div>
                }
                else{
                    return <div className="grid-box"></div>
                }
            })
        }
        </div>
        <div className="footer"><Button variant="text" onClick={() => navigate("/games/loops/forloopgame")}>Next Game <ArrowForwardIcon></ArrowForwardIcon> </Button></div>
    </>
    )
}


export default WhileloopGame;