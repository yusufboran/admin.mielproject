import { Fab, Icon } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const Toggle = styled("div")(() => ({
  position: "fixed",
  top: "80px",
  right: "30px",
  bottom: "50px",
  zIndex: 99,
  transition: "all 0.15s ease",
  "&.open": {
    right: "10px",
  },
}));

const TabButton = () => {
  return (
    <Link to="/projects/add">
      <Toggle>
        <Fab color="primary" aria-label="expand">
          <Icon>add</Icon>
        </Fab>
      </Toggle>
    </Link>
  );
};

export default TabButton;
