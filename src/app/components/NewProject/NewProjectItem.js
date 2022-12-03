import * as React from "react";
import { Box, styled } from "@mui/system";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Review from "./Review";
import { SimpleCard } from "app/components";
import { Icon } from "@mui/material";
import DropFileInput from "../DropFileInput/DropFileInput";
import TextForm from "./TextForm";



const steps = ["Project information", "Project image", "Project check"];

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

function getStepContent(step) {
  switch (step) {
    case 0:
      return <TextForm />;
    case 1:
      return <DropFileInput />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

export default function NewProjectItem() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <Typography component="h1" variant="h4" align="center">
        Add New Project
      </Typography>
      <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography variant="h5" gutterBottom>
            Thank you for your order.
          </Typography>
          <Typography variant="subtitle1">
            Your order number is #2001539. We have emailed your order
            confirmation, and will send you an update when your order has
            shipped.
          </Typography>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Container>
            <SimpleCard title="Simple Form">
              {" "}
              {getStepContent(activeStep)}{" "}
            </SimpleCard>{" "}
          </Container>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {activeStep !== 0 && (
              <Button
                variant="contained"
                color="secondary"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mt: 3, ml: 1 }}
              >
                <Icon fontSize="large">navigate_before</Icon>
                Back
              </Button>
            )}

            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ mt: 3, ml: 1 }}
            >
              {activeStep === steps.length - 1 ? (
                "Finish"
              ) : (
                <>
                  Next<Icon fontSize="large">navigate_next</Icon>
                </>
              )}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </>
  );
}
