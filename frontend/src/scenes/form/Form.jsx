import React, { useState } from "react";
import "../../assets/styles/Form.css";
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
  ThemeProvider,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Textarea } from "@mui/joy";
import theme from "../../components/Theme";

function Form() {
  const [attendance, setAttendance] = useState("");
  const [topics, setTopics] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState(null);
  const [workHours, setWorkHours] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      date,
      attendance,
      workHours,
      topics,
      description,
    };

    try {
      const res = await fetch("/api/forms/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Form submitted successfully");
        // Clear the form
        setName("");
        setDate(null);
        setAttendance("");
        setWorkHours("");
        setTopics("");
        setDescription("");
      } else {
        alert("Failed to submit form");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="form">
      <div className="formComponent">
        <div className="card-Container-1">
          <Card
            sx={{
              maxWidth: 400,
              m: {
                xs: 3,
                sm: 5,
                md: 5,
                lg: 5,
                xl: 5,
              },
            }}
          >
            <CardContent sx={{ alignItems: "center", p: 6, pt: 4 }}>
              <Typography
                sx={{ fontWeight: 600, mb: 2 }}
                variant="h5"
                gutterBottom
              >
                Timesheet Form
              </Typography>
              <Box>
                <TextField
                  sx={{ mb: 2, width: 265 }}
                  label="Name"
                  variant="outlined"
                  color="success"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <ThemeProvider theme={theme}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      sx={{ minWidth: 265, mb: 2 }}
                      label="Select Date"
                      value={date}
                      onChange={(newValue) => setDate(newValue)}
                    />
                  </LocalizationProvider>
                </ThemeProvider>

                <FormControl color="success" sx={{ minWidth: 265, mb: 2 }}>
                  <InputLabel id="select-label-attendence">
                    Attendence
                  </InputLabel>
                  <Select
                    labelId="select-label-attendance"
                    value={attendance}
                    label="Attendance"
                    onChange={(e) => setAttendance(e.target.value)}
                  >
                    <MenuItem value={"Present"}>Present</MenuItem>
                    <MenuItem value={"late"}>Half Day</MenuItem>
                    <MenuItem value={"absent"}>Absent</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  sx={{ mb: 2, width: 265 }}
                  label="Work Hours"
                  color="success"
                  variant="outlined"
                  value={workHours}
                  onChange={(e) => setWorkHours(e.target.value)}
                />

<TextField
                  sx={{ mb: 2, width: 265 }}
                  label="Topics"
                  variant="outlined"
                  color="success"
                  value={topics}
                  onChange={(e) => setTopics(e.target.value)}
                />


                {/* <FormControl color="success" sx={{ minWidth: 265, mb: 2 }}>
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
                </FormControl> */}

                <Textarea
                  minRows={2}
                  color="success"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  sx={{
                    width: 265,
                    "&::before": {
                      border: "1px solid var(--Textarea-focusedHighlight)",
                      transform: "scaleX(0)",
                      left: "2px",
                      right: "2px",
                      bottom: 0,
                      top: "unset",
                      transition: "transform .15s cubic-bezier(0.1,0.9,0.2,1)",
                      borderRadius: 0,
                      borderBottomLeftRadius: "64px 20px",
                      borderBottomRightRadius: "64px 20px",
                    },
                    "&:focus-within::before": {
                      transform: "scaleX(1)",
                    },
                  }}
                />

                <Button
                  sx={{ pl: 5, pr: 5, pb: 1, pt: 1, mt: 3, mb: 2 }}
                  variant="contained"
                  size="contained"
                  color="success"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Box>
            </CardContent>
          </Card>
        </div>
        <div className="card-Container-2">
          <Card
            sx={{
              maxWidth: 500,
              pl: 1,
              pr: 8,
              m: {
                xs: 1,
                sm: 5,
                md: 5,
                lg: 5,
                xl: 5,
              },
            }}
          >
            <CardContent sx={{ alignItems: "center", p: 4 }}>
              <Typography
                sx={{ fontWeight: 600, mb: 2 }}
                variant="h5"
                gutterBottom
              >
                Timesheet Summary
              </Typography>
              <span className="timesheet-weeklist">
                <Typography
                  textAlign="center"
                  sx={{ fontWeight: 500, mb: 1, fontSize: 18 }}
                  gutterBottom
                >
                  Week List
                </Typography>
              </span>

              <div className="total-hours">
                <Typography sx={{ mt: 1 }}> Working Days</Typography>
                <Typography sx={{ mt: 1, fontWeight: 700 }}> 6</Typography>
              </div>
              <div className="total-hours">
                <Typography sx={{ mt: 1 }}> Leave Days</Typography>
                <Typography sx={{ mt: 1, fontWeight: 700 }}> 1</Typography>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Form;
