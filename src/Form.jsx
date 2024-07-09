import React from "react";
import "./assets/styles/Form.css";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Textarea } from "@mui/joy";

function Form() {
  const [attendene, setAttendence] = React.useState("");

  const handleChangeattendence = (event) => {
    setAttendence(event.target.value);
  };
  const [topics, setTopics] = React.useState("");

  const handleChangeTopics = (event) => {
    setTopics(event.target.value);
  };

  return (
    <div className="form">
      <div className="formComponent">
        <div className="card-Container-1">
          <Card sx={{ maxWidth: 400,m: {
            xs: 3,
            sm: 4,
            md: 5,
            lg: 5,
            xl: 5,
          }  }}>
            <CardContent sx={{ alignItems: "center", p: 6, pt: 4}}>
              <Typography sx={{fontWeight: 600, mb: 2}} variant="h5" gutterBottom>Timesheet Form</Typography>
              <Box>
                <div>
                  <TextField
                  
                    sx={{ mb: 2, width: 265, }}
                    id="standard-basic"
                    color="success"
                    label="Name"
                    variant="outlined"
                  />
                </div>
                <div>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                    
                      sx={{ minWidth: 265, mb: 2, color: "success" }}
                      label="Select Date"
                    />
                  </LocalizationProvider>
                </div>
                <div>
                  <FormControl color="success" sx={{ minWidth: 265, mb: 2 }}>
                    <InputLabel id="select-label-attendence">
                      Attendence
                    </InputLabel>
                    <Select
                      color="success"
                      labelId="select-label-attendence"
                      id="select-label"
                      value={attendene}
                      label="attendence"
                      onChange={handleChangeattendence}
                    >
                      <MenuItem value={"Present"}>Present</MenuItem>
                      <MenuItem value={"late"}>Half Day</MenuItem>
                      <MenuItem value={"absent"}>Absent</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <TextField
                    sx={{ mb: 2, width: 265}}
                    id="standard-basic"
                    color="success"
                    size="small"
                    label="Work Hours"
                    variant="outlined"
                  />
                </div>
                <div>
                  <FormControl color="success" sx={{ minWidth: 265, mb: 2 }}>
                    <InputLabel id="select-label-topics">Topics</InputLabel>
                    <Select
                      labelId="select-label-topics"
                      id="select-label"
                      value={topics}
                      label="topics"
                      onChange={handleChangeTopics}
                    >
                      <MenuItem value={"Web development"}>
                        Web development
                      </MenuItem>
                      <MenuItem value={"Python Development"}>
                        Python Development
                      </MenuItem>
                      <MenuItem value={"Timesheet Application"}>
                        Timesheet Application
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <Textarea
                  
                    minRows={2}
                    color="success"
                    placeholder="Description" 
                    sx={{
                      width: 265,
                      "&::before": {
                        
                        border: "1px solid var(--Textarea-focusedHighlight)",
                        transform: "scaleX(0)",
                        left: "2px",
                        right: "2px",
                        bottom: 0,
                        top: "unset",
                        transition:
                          "transform .15s cubic-bezier(0.1,0.9,0.2,1)",
                        borderRadius: 0,
                        borderBottomLeftRadius: "64px 20px",
                        borderBottomRightRadius: "64px 20px",
                      },
                      "&:focus-within::before": {
                        transform: "scaleX(1)",
                      },
                    }}
                  />
                </div>
                <div>
                <Button
          sx={{pl: 5, pr: 5, pb: 1, pt: 1, mt: 3,mb:2 }}
          variant="contained"
          size="contained"
          color="success"
        >
         Submit
        </Button>
                </div>
              </Box>
            </CardContent>
          </Card>
        </div>
        <div className="card-Container-2">
          <Card sx={{ maxWidth: 500,pl: 1,pr: 8, m: {
            xs: 1,
            sm: 1,
            md: 5,
            lg: 5,
            xl: 5,
          }  }}>
            <CardContent  sx={{ alignItems: "center", p:4}}>
            <Typography sx={{fontWeight: 600, mb: 2}} variant="h5" gutterBottom>Timesheet Summary</Typography>
            <span className="timesheet-weeklist">
            <Typography textAlign="center" sx={{fontWeight: 500, mb: 1, fontSize: 18}} gutterBottom>Week List</Typography>
            </span>
                
                <div className="total-hours">
                    <Typography sx={{mt: 1}}> Working Days</Typography>
                    <Typography sx={{mt: 1, fontWeight: 700}}> 6</Typography>
                </div> 
                <div className="total-hours">
                    <Typography sx={{mt: 1}}> Leave Days</Typography>
                    <Typography sx={{mt: 1, fontWeight: 700}}> 1</Typography>
                </div> 
                
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Form;
