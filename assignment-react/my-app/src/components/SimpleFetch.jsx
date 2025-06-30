import { ClientFetch } from "./ClientFetch";

// Server-side data
async function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }
      return res.json();
    })
    .then((data) => {
      return {data};//change to show error
    })
    .catch((err) => {
      console.error("Error");
      return null;
    });
}

export default async function UsersPage() {
  const result = await getUsers();
  const users = result?.data || null;

  return (
    <div>
      <h1>Users List (SSR with fetch)</h1>

      {Array.isArray(users) ? 
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>:"empty list"
}

      <ClientFetch users={users} />
    </div>
  );
}
