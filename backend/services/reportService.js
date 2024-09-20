import PDFDocument from 'pdfkit';
import ExcelJS from 'exceljs';
import { Parser } from 'json2csv';
import Form from '../models/form.js';

const generateReport = async (startDate, endDate, format) => {
  // Fetch timesheets based on date range
  const timesheets = await Form.find({
    date: { $gte: new Date(startDate), $lte: new Date(endDate) }
  });

  switch (format.toLowerCase()) {
    case 'pdf':
      return await generatePDF(timesheets);
    case 'xlsx': // Ensure 'xlsx' is handled properly
      return await generateExcel(timesheets);
    case 'csv':
      return generateCSV(timesheets);
    default:
      throw new Error('Invalid format');
  }
};

const generatePDF = (timesheets) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    let buffer = [];

    doc.on('data', chunk => buffer.push(chunk));
    doc.on('end', () => resolve(Buffer.concat(buffer)));
    doc.on('error', reject);

    doc.fontSize(20).text('Timesheet Report', { align: 'center' }).moveDown(2);
    timesheets.forEach((sheet, index) => {
      doc.fontSize(12).text(`ID: ${index + 1}`)
        .text(`Name: ${sheet.name}`)
        .text(`Date: ${sheet.date.toISOString().split('T')[0]}`)
        .text(`Attendance: ${sheet.attendance}`)
        .text(`Work Hours: ${sheet.workHours || 'N/A'}`)
        .text(`Topics: ${sheet.topics || 'N/A'}`);
      if (sheet.attendance === 'Absent') doc.text(`Reason: ${sheet.reason}`);
      doc.text(`Description: ${sheet.description}`).moveDown(2);
    });
    doc.end();
  });
};

const generateExcel = async (timesheets) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Timesheets');

  worksheet.columns = [
    { header: 'ID', key: 'id', width: 10 },
    { header: 'Name', key: 'name', width: 30 },
    { header: 'Date', key: 'date', width: 20 },
    { header: 'Attendance', key: 'attendance', width: 15 },
    { header: 'Work Hours', key: 'workHours', width: 15 },
    { header: 'Topics', key: 'topics', width: 30 },
    { header: 'Reason', key: 'reason', width: 30 },
    { header: 'Description', key: 'description', width: 50 },
  ];

  timesheets.forEach((sheet, index) => {
    worksheet.addRow({
      id: index + 1,
      name: sheet.name,
      date: sheet.date.toISOString().split('T')[0],
      attendance: sheet.attendance,
      workHours: sheet.workHours || 'N/A',
      topics: sheet.topics || 'N/A',
      reason: sheet.attendance === 'Absent' ? sheet.reason : 'N/A',
      description: sheet.description,
    });
  });

  // Create a buffer for the workbook
  const buffer = await workbook.xlsx.writeBuffer();
  return buffer; // Return the buffer to be sent as a response
};

const generateCSV = (timesheets) => {
  const fields = ['ID', 'Name', 'Date', 'Attendance', 'Work Hours', 'Topics', 'Reason', 'Description'];
  const data = timesheets.map((sheet, index) => ({
    ID: index + 1,
    Name: sheet.name,
    Date: sheet.date.toISOString().split('T')[0],
    Attendance: sheet.attendance,
    'Work Hours': sheet.workHours || 'N/A',
    Topics: sheet.topics || 'N/A',
    Reason: sheet.attendance === 'Absent' ? sheet.reason : 'N/A',
    Description: sheet.description,
  }));

  const parser = new Parser({ fields });
  return parser.parse(data);
};

export default { generateReport };
