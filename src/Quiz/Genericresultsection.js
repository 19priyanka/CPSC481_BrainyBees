// import React from "react";
// import {
//   Radio,
//   RadioGroup,
//   FormControl,
//   FormControlLabel,
//   FormLabel,
// } from "@mui/material";

// export default function Genericresultsection({ questions }) {
//   return (
//     <>
//       {questions.map((question) => {
//         const isSolution = question.correct;
//         return (
//           <div>
//             <FormControl>
//               <FormLabel id="demo-radio-buttons-group-label">
//                 {question.question}
//               </FormLabel>
//               <RadioGroup
//                 aria-labelledby="demo-radio-buttons-group-label"
//                 defaultValue={question.choice2}
//                 name="radio-buttons-group"
//               >
//                 <FormControlLabel
//                   value={question.choice1}
//                   control={
//                     <Radio disabled={question.choice3 !== question.choice2} />
//                   }
//                   label={question.choice1}
//                 />
//                 <FormControlLabel
//                   value={question.choice2}
//                   control={
//                     <Radio disabled={question.choice3 !== question.choice1} />
//                   }
//                   label={
//                     isSolution ? (
//                       <div style={{ border: "2px solid #55c455" }}>
//                         {question.choice2}
//                       </div>
//                     ) : (
//                       <div style={{ border: "2px solid red" }}>
//                         {question.choice2}
//                       </div>
//                     )
//                   }
//                 />
//                 <FormControlLabel
//                   value={question.choice3}
//                   control={
//                     <Radio disabled={question.choice3 !== question.choice1} />
//                   }
//                   label={
//                     isSolution ? (
//                       question.choice3
//                     ) : (
//                       <div style={{ border: "2px solid #55c455" }}>
//                         {question.choice3}
//                       </div>
//                     )
//                   }
//                 />
//               </RadioGroup>
//             </FormControl>
//             <br />
//             <br />
//             <br />
//           </div>
//         );
//       })}
//     </>
//   );
// }
