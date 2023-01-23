import {
  AccordionActions,
  Divider,
  Icon,
  IconButton,
  styled,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { deleteItemId, getItemsList } from "app/db/feature";
import React from "react";
import { useEffect } from "react";
import DeleteDialog from "../DeleteDialog";
import ModalAdd from "./ModalAdd";
import ModalEdit from "./ModalEdit";

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
      {items.map((item, index) => {
        return (
          <ExpansionPanel
            key={index}
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
              <Divider>türkçe</Divider>
              <Typography>{item.trtext}</Typography>
              <Divider>english</Divider>
              <Typography>{item.entext}</Typography>
            </ExpansionPanelDetails>
            <AccordionActions>
              <ModalEdit item={item} />
              <DeleteDialog deleteButton={() => handleDelete(item.id)} />
            </AccordionActions>
          </ExpansionPanel>
        );
      })}
    </div>
  );
};

export default ItemList;
