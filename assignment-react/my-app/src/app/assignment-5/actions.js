'use server';

import axios from "axios";

export async function getUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await res.json();
    return { data};

  } catch (err) {
    console.error("Error fetching users");
  }
}

export async function getDogs() {
  try {
    const result = await axios.get("https://dogapi.dog/api/v2/facts?limit=5");
    return result.data.data;
  } catch (err) {
    console.error("Error fetching");
  }
}