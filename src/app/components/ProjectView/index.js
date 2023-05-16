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
import { Link } from "react-router-dom";
import { deleteProjectsId } from "../../db/project";
import AlertDialog from "app/components/DeleteDialog";
import { ProjectContext } from "app/App";

export default function ProjectView() {
  const items = useContext(ProjectContext);

  const [expanded, setExpanded] = useState(true);
  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleDelete = (item) => {
    deleteProjectsId(item.pid);
  };

  return (
    <Box width="100%" paddingBottom={2}>
      {items.map((item, index) => {
        return (
          <Accordion
            key={index}
            expanded={expanded === "panel" + item.pid}
            onChange={handleChange("panel" + item.pid)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Grid container alignItems="center">
                <Grid item md={5} xs={7}>
                  {item.projectname}
                </Grid>
                <Grid item md={5} xs={4}>
                  <Box>{item.created_at.split("T")[0]}</Box>
                </Grid>
              </Grid>
            </AccordionSummary>

            <AccordionDetails>
              <Typography>
                {parse(item.descriptionen)} <Divider />{" "}
                {parse(item.descriptiontr)}{" "}
              </Typography>
            </AccordionDetails>
            <Divider />

            <AccordionActions>
              <Link
                to={`/projects/edit/${item.pid} `}
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
