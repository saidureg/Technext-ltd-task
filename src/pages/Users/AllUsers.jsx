import { useEffect } from "react";

const AllUsers = () => {
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => console.log(data.users));
  }, []);

  return (
    <div>
      <h3>All Users</h3>
    </div>
  );
};

export default AllUsers;
