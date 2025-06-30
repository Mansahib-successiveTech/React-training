"use client";

import { useAuth } from "@/context/AuthContext";
import { memo, useState } from "react";

const ChildAuth =(() => {
  const { loggedIn, login } = useAuth();
  const [name, setName] = useState("");
  const [password, setPassword] = useState(0);
  const onClickHandler=()=>{
    login(name, password)
   // setName("")
    setPassword(0);
  }
  return (
    <>
     <p>{loggedIn ? ` user loged in ${name}` : "please login"}</p>
      {
      loggedIn?"welcome":<> <label>username</label>
      <input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <label>password</label>
      <input
        value={password}
        type="number"
        onChange={(e) => setPassword(e.target.value)}
      />

      <div>
        <button onClick={onClickHandler}>login</button>
      </div>
      </>
      }

     
     
    </>
  );
});
export default ChildAuth;
