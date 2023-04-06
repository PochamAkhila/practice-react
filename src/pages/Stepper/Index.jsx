import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StepIcon } from "@mui/material";
import { Javascript } from "@mui/icons-material";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
  
const steps = [
    "Select campaign settings",
    "Create an ad group",
    "Create an ad",
];
  
function App() {
    const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
        setActiveStep(0);
    };
  
    return (
        <div className="App">
            <div
                className="head"
                style={{
                    width: "fit-content",
                    margin: "auto",
                }}
            >
                <h1
                    style={{
                        color: "green",
                    }}
                >
                Stepper
                </h1>
                <strong>React MUI StepIcon API</strong>
            </div>
            <br />
            <Box sx={{ width: "80%", margin: "auto" }}>
                <Stepper activeStep={activeStep}>
                    <Step>
                        <StepLabel>HTML</StepLabel>
                        <StepIcon icon={<HtmlIcon />}></StepIcon>
                    </Step>
                    <Step>
                        <StepLabel>CSS</StepLabel>
                        <StepIcon icon={<CssIcon />}></StepIcon>
                    </Step>
                    <Step>
                        <StepLabel>Javascript</StepLabel>
                        <StepIcon icon={<Javascript />}></StepIcon>
                    </Step>
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed
                        </Typography>
                        <Box sx={{ 
                            display: "flex", 
                            flexDirection: "row", 
                            pt: 2 
                        }}>
                            <Box sx={{ flex: "1 1 auto" }} />
                            <Button onClick={handleReset}>
                                Reset
                            </Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            Step {activeStep + 1}
                        </Typography>
                        <Box sx={{ 
                            display: "flex", 
                            flexDirection: "row", 
                            pt: 2 
                        }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: "1 1 auto" }} />
  
                            <Button onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 
                                    "Finish" : "Next"}
                            </Button>
                        </Box>
                    </React.Fragment>
                )}
            </Box>
        </div>
    );
}
  
export default App;