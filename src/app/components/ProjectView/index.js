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
import { useState } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getProjectsList, deleteProjectsId, fileDelete } from "../../firabase";
import AlertDialog from "app/components/DeleteDialog";

export default function ProjectView() {
  const [items, setItems] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    getItem();
  }, []);

  async function getItem() {
    getProjectsList(setItems);
  }
  const handleDelete = (item) => {
    item.files.forEach((file) => {
      fileDelete(file);
    });
    deleteProjectsId(item.id);
    getItem();
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
              <Typography>{parse(item.description)}</Typography>
            </AccordionDetails>
            <Divider />

            <AccordionActions>
              <Link
                to={`/projects/edit/${item.projectName
                  .split(" ")
                  .join("-")
                  .toLowerCase()}?id=${item.id} `}
                className="btn btn-brand"
              >
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
