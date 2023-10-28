import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import './ForLoopGame.css'
import Button from '@mui/material/Button';


function WhileloopGame(props) {

    const [redPosition, setRedPosition] = useState(1);
    const [bluePosition, setBluePosition] = useState(0);
    const [loopCondition, setLoopCondition] = useState(''); 
    const [loopInsideCode,setLoopInsideCode] = useState('');
    const numOfSpaces = 10;
    const submitSolution = ()=> {
       
    }

    return (
        <>
      <div>Complete the Loop condition such that red dot runs away from the blue dot if the blue dot is 1 space away from the red dot</div>
        <div className="margin-top margin-bottom box">
            <code>void redDotRunAway&#40;&#41; </code> <code>&#123;</code>
            <code style={{display: "block"}}>runAway&#40;&#41;</code>
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
    </>
    )
}


export default WhileloopGame;