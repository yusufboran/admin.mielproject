import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button, Divider } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { Editor } from "@tinymce/tinymce-react";

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

export default function TextEditor({ context, setContext, language }) {
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
              {language == "tr"
                ? "Türkçe açıklama ekleyiniz"
                : "Add English description"}{" "}
            </Typography>
          </Box>
        </AccordionSummary>

        <AccordionDetails className="details">
          <Editor
            apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
            onEditorChange={(e) => setContext(e)}
            value={context}
            init={{
              selector: "#tinymce",
              branding: false,
            }}
          />
        </AccordionDetails>

        <Divider />

        <AccordionActions>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </AccordionActions>
      </Accordion>
    </AccordionRoot>
  );
}
