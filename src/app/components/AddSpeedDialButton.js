import * as React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Fab, Icon, IconButton } from "@mui/material";

const actions = [
  {
    icon: (
      <Link to={`/consultants/add`} s style={{ textDecoration: "none" }}>
        <IconButton aria-label="settings">
          <Icon fontSize="small">person</Icon>
        </IconButton>
      </Link>
    ),

    name: "Person",
  },
  {
    icon: (
      <Link to={`/projects/add`} s style={{ textDecoration: "none" }}>
        <IconButton aria-label="settings">
          <Icon fontSize="small">domain</Icon>
        </IconButton>
      </Link>
    ),
    name: "Project",
  },
];

const Toggle = styled("div")(() => ({
  position: "fixed",
  right: "30px",
  bottom: "30px",
  zIndex: 99,
  transition: "all 0.15s ease",
  "&.open": {
    right: "10px",
  },
}));

export default function AddSpeedDialButton({ path }) {
  return (
    <>
      {path ? (
        <Link to={path}>
          <Toggle>
            <Fab color="primary" aria-label="expand">
              <Icon>add</Icon>
            </Fab>
          </Toggle>
        </Link>
      ) : (
        <Toggle>
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            icon={<SpeedDialIcon />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={() => console.log(action.name)}
              />
            ))}
          </SpeedDial>
        </Toggle>
      )}
    </>
  );
}
