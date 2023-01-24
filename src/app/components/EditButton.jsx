import { Button, Icon, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

export default function EditButton({ to }) {
  return (
    <>
      <Link to={to}>
        <Button>
          <Tooltip title="Edit">
            <Icon>edit</Icon>
          </Tooltip>
        </Button>
      </Link>
    </>
  );
}
