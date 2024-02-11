import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const UsersCard = (user) => {
  // console.log(user);
  const { id, firstName, lastName, image, email, address, company } = user.user;
  return (
    <Card sx={{ maxWidth: 345, mt: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", py: 1 }}>
        <Avatar alt={firstName} src={image} />
        <Box>
          <Link to={`/users/${id}`}>
            <Typography
              className="hover:cursor-pointer"
              variant="h6"
              component="div"
            >
              {firstName + " " + lastName}
            </Typography>
          </Link>
          <Typography variant="body1" color="text.secondary">
            {email}
          </Typography>
        </Box>
      </Box>
      <Divider />
      <CardContent>
        <div className="flex flex-col">
          <span className="text-left text-lg font-medium">Address:</span>
          <span className="text-left text-gray-400">
            {" "}
            {address?.address + ", " + address?.city}
          </span>
        </div>
        <div className="flex flex-col mt-2">
          <span className="text-left text-lg font-medium">Company Name:</span>
          <span className="text-left text-gray-400"> {company?.name}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default UsersCard;
