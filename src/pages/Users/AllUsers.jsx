import { useEffect, useState } from "react";
import UsersCard from "./UsersCard";
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Link } from "react-router-dom";

const AllUsers = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [sortingValue, setSortingValue] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        let sortedUsers = [...data.users];
        if (sortingValue === "name") {
          sortedUsers.sort((a, b) => a.firstName.localeCompare(b.firstName));
        } else if (sortingValue === "email") {
          sortedUsers.sort((a, b) => a.email.localeCompare(b.email));
        } else if (sortingValue === "company_name") {
          sortedUsers.sort((a, b) =>
            a.company.name.localeCompare(b.company.name)
          );
        }
        setUsers(sortedUsers);
      });
  }, [sortingValue]);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/search?q=${search}`)
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleChange = (event) => {
    setSortingValue(event.target.value);
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
        <button className="py-2 px-5 bg-[#FF444A] rounded-r-lg text-white absolute right-0 md:right-[127px] lg:right-[382px]">
          <SearchIcon />
        </button>
      </form>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <Link to="/addUser">
          <Button color="error" variant="contained">
            Add User
          </Button>
        </Link>
        <div className="mt-3 md:mt-0">
          <Button sx={{ display: "block" }}>Sort the user</Button>
          <FormControl sx={{ m: 1, width: 300, mt: 1 }}>
            <InputLabel id="demo-simple-select-label">
              Sort Ascending order
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sortingValue}
              label="Sort Ascending order"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="name">Sort by name</MenuItem>
              <MenuItem value="email">Sort by email</MenuItem>
              <MenuItem value="company_name">Sort by Company name</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {users.map((user, idx) => (
          <UsersCard key={idx} user={user} />
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
