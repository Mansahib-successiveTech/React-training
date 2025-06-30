"use client";

import { useState } from "react";
import { CircularProgress } from "@mui/material";

export const ClientFetch = ({ users }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); 

  const show = () => {
    setError("");
    setLoading(true);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Client fetch failed");
        }
        return res.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch(() => {
        console.error("Client Retry Error");
        setError("Retry failed. Please try again.");
        setLoading(false);
      });
  };

  return (
    <>
      <p>Using client component</p>

      {!users ? (
        <>
          {error && <p>{error}</p>}

          {loading ? (
            <div>
              <CircularProgress color="primary" />
            </div>
          ) : data ? (
            <ul>
              {data.map((user, index) => (
                <li key={index}>
                   {user.name} ({user.email})
                </li>
              ))}
            </ul>
          ) : (
            <p>No data yet. Try clicking retry.</p>
          )}
        </>
      ) : (
        <p>Server data was already loaded.</p>
      )}

      <button onClick={show} disabled={users || loading}>
        {loading ? "Loading..." : "Retry"}
      </button>
    </>
  );
};
