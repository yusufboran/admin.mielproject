import {
  AccordionActions,
  Box,
  Divider,
  Icon,
  IconButton,
  ListItem,
  ListItemText,
  styled,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { deleteItemId, getItemsList } from "app/firabase/feature";
import ConfirmationDialog from "app/views/material-kit/dialog/ConfirmationDialog";
import React from "react";
import { useEffect } from "react";
import { SimpleCard } from "..";
import DeleteDialog from "../DeleteDialog";

const ExpansionPanel = styled(Accordion)(() => ({
  "&.root": {
    boxShadow: "none",
    border: "1px solid rgba(0, 0, 0, .125)",
    "&:not(:last-child)": { borderBottom: 0 },
    "&:before": { display: "none" },
    "&$expanded": { margin: "auto" },
  },
}));

const ExpansionPanelSummary = styled(AccordionSummary)({
  "&.root": {
    minHeight: 56,
    marginBottom: -1,
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    "&$expanded": { minHeight: 56 },
  },
  "& .content": { "&$expanded": { margin: "12px 0" } },
});

const ExpansionPanelDetails = styled(AccordionDetails)(({ theme }) => ({
  "&.root": { padding: theme.spacing(2) },
}));
const ItemList = () => {
  const [expanded, setExpanded] = React.useState("panel1");
  const [items, setItems] = React.useState([]);

  const handleChange = (panel) => (_, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleDelete = (id) => {
    deleteItemId(id);
  };

  useEffect(() => {
    getItemsList(setItems);
  }, []);
  return (
    <div>
      {items.map((item) => {
        return (
          <ExpansionPanel
            square
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
          >
            <ExpansionPanelSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>{item.title}</Typography>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails>
              <Divider>TR</Divider>
              <Typography>{item.trText}</Typography>
              <Divider>EN</Divider>
              <Typography>{item.enText}</Typography>
            </ExpansionPanelDetails>
            <AccordionActions>
              <IconButton>
                <Icon>edit</Icon>
              </IconButton>
              <DeleteDialog deleteButton={() => handleDelete(item.id)} />
            </AccordionActions>
          </ExpansionPanel>
        );
      })}
    </div>
  );
};

export default ItemList;
