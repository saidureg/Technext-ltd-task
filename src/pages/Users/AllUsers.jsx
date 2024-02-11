import { useEffect, useState } from "react";
import UsersCard from "./UsersCard";
import SearchIcon from "@mui/icons-material/Search";

const AllUsers = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  }, []);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/search?q=${search}`)
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  };

  return (
    <div>
      <form className="relative flex justify-center items-center my-10">
        <input
          name="search"
          type="text"
          onChange={handleSearch}
          placeholder="Search by user's name...."
          className="py-3 px-4 border rounded-lg w-11/12 md:w-full max-w-md text-[#0B0B0B66]"
        />
        <button className="py-3 px-5 bg-[#FF444A] rounded-r-lg text-white absolute right-3 md:right-[129px] lg:right-[384px]">
          <SearchIcon />
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {users.map((user, idx) => (
          <UsersCard key={idx} user={user} />
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
