const express = require('express');
const app = express();
const port = 3000;

// Get environment variable for student name
const studentName = process.env.STUDENT_NAME || 'Unknown Student';

app.get('/', (req, res) => {
  res.send(`Welcome! This app is built by ${studentName}.`);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});