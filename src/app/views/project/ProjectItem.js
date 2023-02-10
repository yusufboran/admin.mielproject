import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import parse from "html-react-parser";
import { Chip, Divider, Stack } from "@mui/material";
import DeleteDialog from "app/components/DeleteDialog";
import EditButton from "app/components/EditButton";
import { deleteProjectsId } from "../../db/project";
import SliderImage from "app/components/SliderImage";
import styled from "@emotion/styled";

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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleDelete = (item) => {
    deleteProjectsId(item.pid);
  };

  return (
    <Card>
      <Card>
        <div style={{ position: "relative" }}>
          <SliderImage item={item.paths} />
          <h1
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              borderRadius: "5px",
              position: "absolute",
              color: "white",
              top: 20,
              left: 30,
              zIndex: 99,
            }}
          >
            {item.projectname}
          </h1>
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
      <CardActions disableSpacing>
        <EditButton to={`/projects/edit/${item.pid} `} />
        <DeleteDialog deleteButton={() => handleDelete(item)} />
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
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
