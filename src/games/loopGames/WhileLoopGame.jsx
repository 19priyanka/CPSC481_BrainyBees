import * as React from 'react';
import { useState } from 'react';
import './ForLoopGame.css'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShowPath from '../../Showpath';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

function WhileloopGame(props) {

    const navigate = useNavigate();


    const [redPosition, setRedPosition] = useState(1);
    const [bluePosition, setBluePosition] = useState(0);
    const [loopCondition, setLoopCondition] = useState(''); 
    const [loopInsideCode,setLoopInsideCode] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [openHint,setOpenHint] = useState(false);
    const closeHint = () => setOpenHint(false);
    const showHint = () => setOpenHint(true);
    const numOfSpaces = 10;
    const modalStyle = {
        position: 'absolute',
        top: '30%',
        left: '50%',
        width: 200,

        padding: 2,
        bgcolor: 'white',
      };
    const submitSolution = ()=> {
        setSuccess('');
        if(loopCondition !== 'redPosition - bluePosition <= 1' || loopInsideCode !== 'redDotRunAway();'){
            setError('Incorrect Syntax');
            return;
        }
        let numberOfRuns = 8;
        let redP = 1;
        let blueP = 0;
        let nIntervId = setInterval(()=> {
            redP = redP + 1;
            blueP = blueP + 1;
            setRedPosition(redP);
            setBluePosition(blueP);
            numberOfRuns--;
            if(numberOfRuns === 0){
                clearInterval(nIntervId);
            }
           
        
        }, 500);
        setSuccess('Success! You have completed the game')
        setError('')
       
    }
    

    let handleLoopCondition = (e) =>    {
        setLoopCondition(e.target.value);  
    }
    let handleLoopInsideCode = (e)=> {    
        setLoopInsideCode(e.target.value);  
    }

    return (
        <div className='game-container'>
      <ShowPath></ShowPath>

      <h1>While Loop Game</h1>
      <Modal
        open={openHint}
        onClose={closeHint}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Hint
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Consider the difference between the distances
          </Typography>
        </Box>
      </Modal>
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
            <code style={{display: "block"}}>  int bluePosition = 0; </code>
            <code style={{display: "block"}}>moveBlue&#40;&#41; ;</code>


            <code  style={{display: "block"}}>  while &#40;   <input style={{width:'200px'}} value={loopCondition} onChange={handleLoopCondition} /> <code>&#41;</code>  </code>
          

            
            <code style={{display: "block"}} >&#123;</code>
            <input onChange={handleLoopInsideCode} value={loopInsideCode}/>
            <code style={{display: "block"}} >&#125;</code>
            

            <code style={{display: "block"}} >return 0;</code>

            <code style={{display: "block"}} >&#125;</code>


        </div>
        <Button className='margin-top' variant="contained" onClick={() => submitSolution()}>Submit</Button>
        { error !== '' && <p style={{color:'red'}}>{error}</p>}
        { success !== '' && <p style={{color:'green'}}>{success}</p>}

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
    </div>
    )
}


export default WhileloopGame;