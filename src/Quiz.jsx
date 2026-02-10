// import React from "react";
// import { useState } from "react";
// export function Quiz() {
  
//   const data = {
//     question1: {
//       question: "1.what is capital city of ethoipia",
//       a: "A .addis abab",
//       b: "B .hawasa",
//       c: "c .jimma",
//       d: "D .adama",
//     },
//     question2: {
//       question: "2.what is capital city of france",
//       a: "A .addis abab",
//       b: "B .paris",
//       c: "C .jimma",
//       d: "D .adama",
//     },
//     question3: {
//       question: "3.what is capital city of kenya",
//       a: "A.addis abab",
//       b: "B .hawasa",
//       c: "C .jimma",
//       d: "D .nairobi",
//     },
//   };
  
//    const[count,calCal]=useState(0);
   
    
      
      
  
  
//   return (
//     <div>
//       <div className="q1">
//         <h1>{data.question1.question}</h1>
       
//         <p> <input type="radio"  onClick={()=>calCal((count)=>count+1)} /><span  id="q1a">{data.question1.a}</span></p>
//         <p><input type="radio" /><span  id="qb">{data.question1.b}</span></p>
//         <p><input type="radio" /><span  id="qc">{data.question1.c}</span></p>
//         <p><input type="radio" /><span  id="qd">{data.question1.d}</span></p>
//       </div>

//       <div className="q2">
//         <h1>{data.question2.question}</h1>
//      <p> <input type="radio"/><span  id="qa">{data.question2.a}</span></p>
//         <p><input type="radio" onClick={()=>calCal((count)=>count+1)}/><span  id="q2b">{data.question2.b}</span></p>
//         <p><input type="radio" /><span  id="qc">{data.question2.c}</span></p>
//         <p><input type="radio" /><span  id="qd">{data.question2.d}</span></p>
//       </div>
//       <div className="3">
//         <h1>{data.question3.question}</h1>
//       <p> <input type="radio"/><span  id="qa">{data.question3.a}</span></p>
//         <p><input type="radio" /><span  id="qb">{data.question3.b}</span></p>
//         <p><input type="radio" /><span  id="qc">{data.question3.c}</span></p>
//         <p><input type="radio" onClick={()=>calCal((count)=>count+1)} /><span  id="q3d">{data.question3.d}</span></p>
//       </div>
//      <button className="btn" >you scored {count} / 3</button>
//     </div>

     

//   );
// }
import React, { useState } from "react";

export function Quiz() {
  const questions = [
    {
      question: "What is the capital city of Ethiopia?",
      options: ["Addis Ababa", "Hawasa", "Jimma", "Adama"],
      answer: 0,
    },
    {
      question: "What is the capital city of France?",
      options: ["Addis Ababa", "Paris", "Jimma", "Adama"],
      answer: 1,
    },
    {
      question: "What is the capital city of Kenya?",
      options: ["Addis Ababa", "Hawasa", "Jimma", "Nairobi"],
      answer: 3,
    },
  ];

  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState({});

  const handleAnswer = (questionIndex, optionIndex) => {
    // prevent answering same question twice
    if (answered[questionIndex]) return;

    if (optionIndex === questions[questionIndex].answer) {
      setScore(score + 1);
    }

    setAnswered({ ...answered, [questionIndex]: true });
  };

  return (
    <div>
      <h1>Quiz App</h1>

      {questions.map((q, qi) => (
        <div key={qi}>
          <h3>
            {qi + 1}. {q.question}
          </h3>

          {q.options.map((option, oi) => (
            <label key={oi} style={{ display: "block" }}>
              <input
                type="radio"
                name={`question-${qi}`}
                onChange={() => handleAnswer(qi, oi)}
                disabled={answered[qi]}
              />
              {option}
            </label>
          ))}
        </div>
      ))}

      <h2>
        You scored {score} / {questions.length}
      </h2>
    </div>
  );
}
