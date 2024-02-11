import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

const UsersCard = (user) => {
  // console.log(user);
  const { id, firstName, lastName, image, email } = user.user;
  console.log(id, firstName, lastName);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar alt={firstName} src={image} />}
        title={firstName + " " + lastName}
        subheader={email}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UsersCard;
