import { ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";
import { ImageConfig } from "./imageConfig";
import DeleteIcon from "@mui/icons-material/Delete";
import "./styles.css";

const FileItem = ({ name, deleteFunc }) => {
  return (
    <div className="drop-file-preview__item">
      <ListItem>
        <ListItemAvatar>
          <img src={ImageConfig["png"] || ImageConfig["default"]} alt="" />
        </ListItemAvatar>
        <ListItemText primary={name}/>
      </ListItem>

      <span className="drop-file-preview__item__del" onClick={() => deleteFunc()}>
        <DeleteIcon />
      </span>
    </div>
  );
};

export default FileItem;
