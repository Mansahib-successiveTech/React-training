"use client";
import { useState } from "react";

export default function PersonForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);

  return (
    <>
      <div>
        <p>user form</p>
        <label>firstname</label>
        <input type="text" onChange={(e) => setFirstName(e.target.value)} />
        <br></br>
        <label>lastname</label>
        <input type="text" onChange={(e) => setLastName(e.target.value)} />
        <br></br>
        <label>age</label>
        <input type="number" onChange={(e) => setAge(e.target.value)} />
        <br></br>
        <div>
          <p> {firstName}</p>

          <p>{lastName}</p>

          <p>{age}</p>
        </div>
      </div>
    </>
  );
}
