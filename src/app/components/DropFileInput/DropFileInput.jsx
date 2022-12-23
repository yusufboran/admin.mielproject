import React, { useRef } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import "./styles.css";
import { ImageConfig } from "./imageConfig";
import uploadImg from "./assets/cloud-upload-regular-240.png";
import DeleteIcon from "@mui/icons-material/Delete";

const DropFileInput = ({ fileList, setFileList, singleFile }) => {
  const wrapperRef = useRef(null);
  const onDragEnter = () => wrapperRef.current.classList.add("dragover");
  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");
  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = (e) => {
    if (singleFile) {
      const newFile = e.target.files[0];
      if (newFile) {
        const updatedList = [...fileList, newFile];
        setFileList(updatedList);
      }
    } else {
      const files = e.target.files;
      var list = [];
      for (let i = 0; i < files.length; i++) {
        list.push(files[i]);
      }
      setFileList(list);

      console.log("file : ", list);
    }
  };

  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <>
        {!singleFile || fileList.length !== 1 ? (
          <div
            ref={wrapperRef}
            className="drop-file-input"
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
          >
            <div className="drop-file-input__label">
              <img src={uploadImg} alt="" />
              <p>Drag & Drop your files here</p>
            </div>
            <input type="file" value="" onChange={onFileDrop} multiple />
          </div>
        ) : null}
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {fileList.length > 0 ? (
            <div className="drop-file-preview">
              <p className="drop-file-preview__title">Ready to upload</p>
              {fileList.map((item, index) => (
                <div key={index} className="drop-file-preview__item">
                  <ListItem>
                    <ListItemAvatar>
                      <img
                        src={
                          ImageConfig[item.type.split("/")[1]] ||
                          ImageConfig["default"]
                        }
                        alt=""
                      />
                    </ListItemAvatar>
                    <ListItemText primary={item.name} secondary={item.size} />
                  </ListItem>

                  <span
                    className="drop-file-preview__item__del"
                    onClick={() => fileRemove(item)}
                  >
                    <DeleteIcon />
                  </span>
                </div>
              ))}
            </div>
          ) : null}
        </List>
      </>
    </Box>
  );
};

export default DropFileInput;
