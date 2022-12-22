import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { ListItem } from "@mui/material";
import ModalAdd from "./ModalAdd";

const ItemList = ({ openItem, items }) => {
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
        <ListItem secondaryAction={<ModalAdd />}>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <img
                height={"25px"}
                width={"25px"}
                alt="socialMedia"
                src={"/assets/images/icons/social-network.png"}
              />
            </ListItemIcon>
            <ListItemText primary={"Social Media"} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          {items.map((item, index) => {
            return (
              <List key={index} component="div" disablePadding>
                <ListItem>
                  <ListItemButton onClick={() => openItem(item)} sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <img
                        height={"25px"}
                        width={"25px"}
                        alt="socialMedia"
                        src={
                          "/assets/images/icons/" + item.socialMedia + ".png"
                        }
                      />
                    </ListItemIcon>
                    <ListItemText>{item.username} </ListItemText>
                    <img
                      height={"25px"}
                      width={"25px"}
                      alt="socialMedia"
                      src={"/assets/images/icons/edit-icon.png"}
                    />
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
