"use client"

export const Child=({Increment,count,setCount})=>{
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

}

Child.prototype