"use client";
import { useState } from "react";

const RandomNumberGenerator = () => {
  const generateRandom = () => {
    let result = Math.floor(Math.random() * 100 + 1);
    return result;
  };
  const [number, setNumber] = useState();
  const setRandom = () => {
    setNumber(generateRandom());
  };

  return (
    <>
      <p>number is :{number}</p>
      <button onClick={setRandom}>randomize</button>
    </>
  );
};
export default RandomNumberGenerator;
