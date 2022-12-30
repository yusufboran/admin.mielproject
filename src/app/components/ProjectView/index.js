import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Icon,
  IconButton,
  Grid,
  AccordionActions,
  Divider,
} from "@mui/material";
import parse from "html-react-parser";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { useContext, useState } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { deleteProjectsId, fileDelete } from "../../firabase";
import AlertDialog from "app/components/DeleteDialog";
import { ProjectContext } from "app/App";

export default function ProjectView() {
  const items = useContext(ProjectContext);

  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleDelete = (item) => {
    item.path.forEach((path) => {
      fileDelete(path);
    });
    deleteProjectsId(item.id);
  };

  return (
    <Box width="100%" paddingBottom={2}>
      {items.map((item, index) => {
        return (
          <Accordion
            key={index}
            expanded={expanded === "panel" + item.id}
            onChange={handleChange("panel" + item.id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Grid container alignItems="center">
                <Grid item md={5} xs={7}>
                  {item.projectName}
                </Grid>
                <Grid item md={5} xs={4}>
                  <Box>{format(item.updateDate, "MM/dd/yyyy HH:MM")}</Box>
                </Grid>
              </Grid>
            </AccordionSummary>

            <AccordionDetails>
              <Typography>
                {parse(item.descriptionEN)} <Divider />{" "}
                {parse(item.descriptionTR)}{" "}
              </Typography>
            </AccordionDetails>
            <Divider />

            <AccordionActions>
              <Link to={`/projects/edit/${item.id} `} className="btn btn-brand">
                <IconButton>
                  <Icon>edit</Icon>
                </IconButton>
              </Link>
              <AlertDialog deleteButton={() => handleDelete(item)}>
                <Icon color="error">delete</Icon>
              </AlertDialog>
            </AccordionActions>
          </Accordion>
        );
      })}
    </Box>
  );
}
