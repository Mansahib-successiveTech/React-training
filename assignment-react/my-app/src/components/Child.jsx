"use client"

import { memo } from "react";

export const Child=memo(({Increment,count,setCount})=>{
    const reset = () => {
        setCount(0);
      };
    
    return(
        <>
        <p>child:{count}</p>
        <button onClick={Increment}>increase</button>
        <button onClick={reset}>reset</button>
        </>
    )

})

Child.prototype