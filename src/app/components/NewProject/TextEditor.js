import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button, Divider } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import TextEditor from "../TextEditor";

const AccordionRoot = styled(Box)(({ theme }) => ({
  width: "100%",
  "& .heading": { fontSize: theme.typography.pxToRem(15) },
  "& .secondaryHeading": {
    color: theme.palette.text.secondary,
    fontSize: theme.typography.pxToRem(15),
  },
  "& .icon": {
    width: 20,
    height: 20,
    verticalAlign: "bottom",
  },
  "& .details": { alignItems: "center" },
  "& .column": { flexBasis: "33.33%" },
  "& .helper": {
    padding: theme.spacing(1, 2),
    borderLeft: `2px solid ${theme.palette.divider}`,
  },
  "& .link": {
    textDecoration: "none",
    color: theme.palette.primary.main,
    "&:hover": { textDecoration: "underline" },
  },
}));

export default function EditorBlock({
  children,
  context,
  setContext,
  language,
}) {
  return (
    <AccordionRoot>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <Box className="column">
            <Typography className="heading">
              {language === "tr"
                ? "Türkçe açıklama ekleyiniz"
                : "Add English description"}{" "}
            </Typography>
          </Box>
        </AccordionSummary>

        <AccordionDetails className="details">
          {children}
          <TextEditor setContext={setContext} value={context} />
        </AccordionDetails>
      </Accordion>
    </AccordionRoot>
  );
}
