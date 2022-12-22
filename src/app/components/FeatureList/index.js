import { ListItem, ListItemText, Paper } from "@mui/material";
import React from "react";
import ModalAdd from "./ModalAdd";
import ItemList from "./ItemList";

export default function FeaturesList() {
  return (
    <Paper sx={{ marginBottom: 2, borderRadius: 1 }}>
      <ListItem secondaryAction={<ModalAdd />}>
        <ListItemText primary={"Features"} />
      </ListItem>
      <ItemList />
    </Paper>
  );
}
