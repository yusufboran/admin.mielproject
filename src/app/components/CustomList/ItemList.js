import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Icon, IconButton, ListItem } from "@mui/material";
import Icons from "./Icons";

const ItemList = ({ newItem, openItem, items }) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          boxShadow: 2,
          borderRadius: "5px",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItem
          secondaryAction={
            <IconButton onClick={() => newItem()} edge="end" aria-label="add">
              <Icon color="primary">add_circle</Icon>
            </IconButton>
          }
        >
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <img height={"25px"} width={"25px"} src={Icons("socialMedia")} />
            </ListItemIcon>
            <ListItemText primary={"Social Media"} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          {items.map((item, index) => {
            return (
              <List component="div" disablePadding>
                <ListItem>
                  <ListItemButton onClick={() => openItem(item)} sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <img
                        height={"25px"}
                        width={"25px"}
                        src={Icons(item.sosicalMedia)}
                      />
                    </ListItemIcon>
                    <ListItemText>{item.username} </ListItemText>
                    <Icon>visibility</Icon>
                  </ListItemButton>
                </ListItem>
              </List>
            );
          })}
        </Collapse>
      </List>
    </div>
  );
};

export default ItemList;
