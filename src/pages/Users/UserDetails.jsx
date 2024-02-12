import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { useLoaderData } from "react-router-dom";

import BackButton from "../../components/BackButton";

const UserDetails = () => {
  const { firstName, lastName, image, email, address, company } =
    useLoaderData();
  return (
    <Box>
      <BackButton />
      <Card sx={{ maxWidth: 400, mx: "auto", mt: 10, bgcolor: "bisque" }}>
        <Box sx={{ display: "block", py: 1 }}>
          <Avatar
            alt={firstName}
            src={image}
            sx={{ width: 80, height: 80, mx: "auto", my: 2 }}
          />
          <Box>
            <Typography
              className="hover:cursor-pointer"
              variant="h5"
              component="div"
            >
              {firstName + " " + lastName}
            </Typography>

            <Typography variant="body1" color="text.secondary">
              {email}
            </Typography>
          </Box>
        </Box>
        <Divider />
        <CardContent>
          <div className="flex flex-col">
            <span className="text-lg font-medium">Address:</span>
            <span className=" text-gray-600">
              {" "}
              {address?.address + ", " + address?.city}
            </span>
          </div>
          <div className="flex flex-col mt-2">
            <span className=" text-lg font-medium">Company Name:</span>
            <span className=" text-gray-600"> {company?.name}</span>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserDetails;
