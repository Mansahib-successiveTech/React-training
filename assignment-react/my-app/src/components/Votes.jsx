"use client";

import { useReducer } from "react";

// initialize
const initialState = {
  candidateA: 0,
  candidateB: 0,
};

const countVotes = (state, action) => {
  switch (action.type) {
    case "candidateA":
      return { ...state, candidateA: state.candidateA + 1 };
    case "candidateB":
      return { ...state, candidateB: state.candidateB + 1 };
    case "Reset":
      return { candidateA: 0, candidateB: 0 };
    default:
      return state;
  }
};

export const Votes=()=>{
   const [state,dispatch]=useReducer(countVotes,initialState); 

    return(
        <>
        <h3>vote for your candidates</h3>
        <button onClick={()=>dispatch({type:"candidateA"})}>vote A</button>
        <button onClick={()=>dispatch({type:"candidateB"})}>vote B</button>
        <button onClick={()=>dispatch({type:"Reset"})}>reset</button>
        <h3>votes</h3>
        <h3>
        candidateA  --  {state.candidateA}
           
        </h3>
        <h3>
        candidateb  --  {state.candidateB}
           
        </h3>
        
        </>
    )
}