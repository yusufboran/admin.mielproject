import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import { Editor } from "@tinymce/tinymce-react";
import React from "react";
import { useState } from "react";
import DropFileInput from "../../DropFileInput/DropFileInput";
import Header from "./Header";
import "../style.scss";

function getSteps() {
  return ["Upload image", "Context", "Header check"];
}

export default function StepperForm() {
  const [file, setFile] = useState([]);
  const [headerContext, setHeaderContext] = useState(
    '<h2 style="text-align: center;">türkçe açıklama</h2>'
  );

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
            onEditorChange={(e) => setHeaderContext(e)}
            value={headerContext}
            init={{
              selector: "#tinymce",
              branding: false,
            }}
          />
        );
      case 2:
        return (
          <Header bgImg={file} content={headerContext} editComponet={true} />
        );

      default:
        return `Aenean arcu ligula, porttitor id neque imperdiet, congue convallis erat. Integer libero sapien, convallis a vulputate vel, pretium vulputate metus. Donec leo justo, viverra ut tempor commodo, laoreet eu velit. Donec vel sem quis velit pharetra elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam in commodo mauris. Ut iaculis ipsum velit.`;
    }
  }

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () =>
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

  const handleBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handleReset = () => setActiveStep(0);

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
        {activeStep === steps.length ? (
          <Box>
            <Typography>All steps completed</Typography>

            <Button
              sx={{ mt: 2 }}
              variant="contained"
              color="secondary"
              onClick={handleReset}
            >
              Reset
            </Button>
          </Box>
        ) : (
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
                sx={{ ml: 2 }}
                variant="contained"
                color="primary"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
