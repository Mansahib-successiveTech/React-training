import { getUsers } from "@/app/assignment-5/actions";


export default async function Page() {
  const { data: users } = await getUsers();

  return (
    <div>
      <h1>Users List </h1>

      {users ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      ) : (
        <p>No users available</p>
      )}

    
      <form action={getUsers}>
        <button type="submit">Retry</button>
      </form>
    </div>
  );
}
