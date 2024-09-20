import reportService from '../services/reportService.js';

export const generateReport = async (req, res) => {
  const { startDate, endDate, format } = req.body;

  // Validate date inputs
  if (!startDate || !endDate || isNaN(new Date(startDate).getTime()) || isNaN(new Date(endDate).getTime())) {
    return res.status(400).json({ message: 'Invalid date format' });
  }

  try {
    const report = await reportService.generateReport(startDate, endDate, format);

    // Set appropriate headers based on format
    switch (format.toLowerCase()) {
      case 'pdf':
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=report.pdf');
        break;
      case 'xlsx': // Specifically handle .xlsx
        res.setHeader('Content-Disposition', 'attachment; filename=report.xlsx');
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        break;
      case 'csv':
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename=report.csv');
        break;
      default:
        return res.status(400).json({ message: 'Invalid format' });
    }

    res.send(report);
  } catch (error) {
    console.error('Error generating report:', error);
    res.status(500).json({ message: 'Failed to generate report' });
  }
};
