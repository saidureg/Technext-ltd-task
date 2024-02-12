import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link to="/">
      <Button variant="contained" endIcon={<SendIcon />}>
        Back to Home Page
      </Button>
    </Link>
  );
};

export default BackButton;
