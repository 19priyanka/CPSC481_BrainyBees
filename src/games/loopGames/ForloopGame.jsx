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

function ForloopGame(props) {
    const navigate = useNavigate();
    


    const [circleColoredInCount, setColoredInCount] = useState(0);
    const [error, setError] = useState('');  
    const [success, setSuccess] = useState('');
    const [openHint,setOpenHint] = useState(false);
    const closeHint = () => setOpenHint(false);
    const showHint = () => setOpenHint(true);

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
        const numIntializeIndex = parseInt(initalizeIndex);
        const numLoopConditionRight = parseInt(loopConditionRight);
        if(loopConditionLeft !== 'i' || incrementIndex !=='i' || numIntializeIndex === NaN || numLoopConditionRight === NaN){
            setError('Incorrect Syntax');
            return;
        }
        let numTocolorIn = numLoopConditionRight - numIntializeIndex;
        if(numTocolorIn < 0){
            setColoredInCount(0);
            setError('No number of circles to color in, check your loop condition');
            return;
        }
        if(numTocolorIn > 6) {
            setColoredInCount(6);
            setError('Too many circles to color in,  , check your loop condition');
            return;
        }
        setColoredInCount(numTocolorIn);
        if(numTocolorIn !== 6) {
            setError('Not enough circles to color in, check your loop condition');
            return;
        }
        setError('')
        setSuccess('Success! You have completed the game')
        
    }

    const [initalizeIndex,setIntializeIndex] = useState('');
    const [loopConditionLeft,setLoopConditionLeft] = useState('');
    const [loopConditionRight,setLoopConditionRight] = useState('');
    const [incrementIndex,setIncrementIndex] = useState('');

    let handleLoopConditionLeft = (e) =>    {
        setLoopConditionLeft(e.target.value);  
    }
    let handleLoopConditionRight = (e)=> {    
        setLoopConditionRight(e.target.value);  
    }
    let handleIncrementIndex = (e)=> {    
       setIncrementIndex(e.target.value);  
    }
    let handleInitializeIndex = (e)=> {  
        debugger;  
        setIntializeIndex(e.target.value);  
    }


    return (
        <div className='game-container'>
      <ShowPath></ShowPath>
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
            Consider the number of circles that need to be colored in the loop condition
          </Typography>
        </Box>
      </Modal>
      <h1>For Loop Game</h1>
     

      <div className="description">
      <div>Complete the code such that only 6 of the circles are filled after running the code</div>
      <Button variant="contained" onClick={showHint}>Hint</Button>
      </div>
        <div className="margin-top margin-bottom box">
        &#40;<code>  for int i =  </code><input onChange={handleInitializeIndex} value={initalizeIndex}/>
            <code>; </code><input onChange={handleLoopConditionLeft} value={loopConditionLeft}/>
            <code>&#60;</code>
            <input onChange={handleLoopConditionRight} value={loopConditionRight}/>

            <code>;</code>
            <input onChange={handleIncrementIndex} value={incrementIndex}/>
            <code>++</code>
            <code>&#41;</code>
            <code>&#123;</code>
            <code style={{display: "block"}}>fillNextCircle&#40;&#41;</code>
            <code style={{display: "block"}} >&#125;</code>
        </div>
        <Button className='margin-top' variant="contained" onClick={() => submitSolution()}>Submit</Button>
        { error !== '' && <p style={{color:'red'}}>{error}</p>}
        { success !== '' && <p style={{color:'green'}}>{success}</p>}
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
    </div>
    )
}


export default ForloopGame;