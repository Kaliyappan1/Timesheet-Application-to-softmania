import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  ThemeProvider,
} from '@mui/material';
import theme from './Theme';

const ReportPopupDialog = ({ open, handleClose }) => {
  const [format, setFormat] = useState('PDF');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleGenerateReport = () => {
    // Logic for report generation (can be customized)
    console.log('Report format:', format);
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
    handleClose(); // Close the dialog after generation
  };

  return (
    <ThemeProvider theme={theme}>

    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Generate Report</DialogTitle>
      <DialogContent>
        {/* Start Date Input */}
        <TextField
          label="Start Date"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          margin="dense"
        />

        {/* End Date Input */}
        <TextField
          label="End Date"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          margin="dense"
        />

        {/* Format Selection */}
        <RadioGroup
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          row
        >
          <FormControlLabel value="PDF" control={<Radio />} label="PDF" />
          <FormControlLabel value="Excel" control={<Radio />} label="Excel" />
          <FormControlLabel value="CSV" control={<Radio />} label="CSV" />
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleGenerateReport} color="primary">
          Generate Report
        </Button>
      </DialogActions>
    </Dialog>
    </ThemeProvider>
  );
};

export default ReportPopupDialog;
