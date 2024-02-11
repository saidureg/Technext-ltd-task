import { useEffect, useState } from "react";
import UsersCard from "./UsersCard";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <div>
      <h3>All Users</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {users.map((user, idx) => (
          <UsersCard key={idx} user={user} />
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
