import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import { Editor } from "@tinymce/tinymce-react";
import { addItem } from "app/db/about";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DropFileInput from "../../DropFileInput/DropFileInput";
import "../style.scss";
import About from "./Component";

export default function StepperForm() {
  const [file, setFile] = useState([]);
  const [text_tr, settext_tr] = useState("türkçe açıklama");
  const [text_en, settext_en] = useState("english explanation");

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <DropFileInput
            fileList={file}
            setFileList={setFile}
            singleFile={true}
          />
        );
      case 1:
        return (
          <Editor
            apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
            onEditorChange={(e) => settext_tr(e)}
            value={text_tr}
            init={{
              selector: "#tinymce",
              branding: false,
            }}
          />
        );
      case 2:
        return (
          <Editor
            apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
            onEditorChange={(e) => settext_en(e)}
            value={text_en}
            init={{
              selector: "#tinymce",
              branding: false,
            }}
          />
        );

      case 3:
        return (
          <About
            image={file}
            context_tr={text_tr}
            context_en={text_en}
            edit={true}
          />
        );

      default:
        return `Aenean arcu ligula, porttitor id neque imperdiet, congue convallis erat. Integer libero sapien, convallis a vulputate vel, pretium vulputate metus. Donec leo justo, viverra ut tempor commodo, laoreet eu velit. Donec vel sem quis velit pharetra elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam in commodo mauris. Ut iaculis ipsum velit.`;
    }
  }

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ["Upload image", "Context TR", "Context EN", "Check"];

  const handleNext = () =>
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

  const handleBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handleSave = () => {
    addItem(file[0], text_tr, text_en, "content");
    window.location.reload(true);
  };

  return (
    <Box>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box mt={4}>
        <Box>
          <Typography>{getStepContent(activeStep)}</Typography>
          <Box pt={2}>
            <Button
              variant="contained"
              color="secondary"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>

            <Button
              disabled={
                !(file.length > 0) ||
                !(text_tr.length > 0) ||
                !(text_en.length > 0)
              }
              sx={{ ml: 2 }}
              variant="contained"
              color="primary"
              onClick={
                activeStep === steps.length - 1 ? handleSave : handleNext
              }
            >
              {activeStep === steps.length - 1 ? "Save" : "Next"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
