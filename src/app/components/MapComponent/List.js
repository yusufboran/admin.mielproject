import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { deleteItemId } from "app/db/locaion";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { Icon, IconButton } from "@mui/material";
import DeleteDialog from "../DeleteDialog";

export default function MapList({ items, handleEdit }) {
  const handleDelete = (id) => {
    deleteItemId(id);
  };
  console.log("items", items);

  return (
    <div>
      {items.length < 1 ? null : (
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Adress</TableCell>
              <TableCell align={"center"}>Number</TableCell>
              <TableCell>Location</TableCell>
              <TableCell align={"center"}>İmage</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {items.map((location) => (
              <TableRow
                key={location.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{location.name} </TableCell>
                <TableCell>{location.address}</TableCell>
                <TableCell align={"center"}>{location.phone}</TableCell>
                <TableCell>{location.location}</TableCell>
                <TableCell align={"center"}>
                  {location.image ? (
                    <CheckCircleOutlineIcon color="success" />
                  ) : (
                    <CloseIcon color="error" />
                  )}
                </TableCell>
                <TableCell align="right">
                  <Link className="btn btn-brand">
                    <IconButton onClick={() => handleEdit(location)}>
                      <Icon>edit</Icon>
                    </IconButton>
                  </Link>
                  <DeleteDialog
                    deleteButton={() => handleDelete(location.lid)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
