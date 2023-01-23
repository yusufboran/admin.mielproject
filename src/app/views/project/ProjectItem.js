import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import parse from "html-react-parser";
import { Chip, Divider, Menu, MenuList, Stack } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteDialog from "app/components/DeleteDialog";
import EditButton from "app/components/EditButton";
import { getProjectsList, deleteProjectsId, fileDelete } from "../../db";
import SliderImage from "app/components/SliderImage";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProjectItem({ item }) {
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleDelete = (item) => {
    item.files.forEach((file) => {
      fileDelete(file);
    });
    deleteProjectsId(item.id);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // id: doc.id,
  return (
    <Card>
      <Card>
        <div style={{ position: "relative" }}>
          <SliderImage item={item.paths} />
          <h1
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              position: "absolute",
              color: "white",
              top: 20,
              left: 30,
              zIndex: 99,
            }}
          >
            {item.projectname}
          </h1>
          <div
            style={{
              position: "absolute",
              color: "white",
              top: 10,
              right: 10,
              zIndex: 99,
            }}
          >
            <IconButton
              id="fade-button"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuList sx={{ backgroundColor: "transparent" }}>
                <MenuItem>
                  <DeleteDialog deleteButton={() => handleDelete(item)} />
                </MenuItem>
                <MenuItem>
                  <EditButton to={`/projects/edit/${item.id} `} />
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </Card>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div"></Typography>
        <Typography variant="body2" color="text.secondary">
          <Stack direction="row" spacing={1}>
            {item.features.map((item) => (
              <Chip label={item} />
            ))}
          </Stack>
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={handleExpandClick}>
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {parse(item.descriptiontr)}
          <Divider />
          {parse(item.descriptionen)}
        </CardContent>
      </Collapse>
    </Card>
  );
}
