import { Icon, IconButton, ListItem, ListItemText, Modal } from "@mui/material";
import React from "react";
import { SimpleCard } from "..";
import ModalAdd from "./ModalAdd";
import ItemList from "./ItemList";

export default function FeaturesList() {
  return (
    <SimpleCard>
      <ListItem secondaryAction={<ModalAdd />}>
        <ListItemText primary={"Features"} />
      </ListItem>
      <ItemList />
    </SimpleCard>
  );
}
