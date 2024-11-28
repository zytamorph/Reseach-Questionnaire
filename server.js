// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS for all requests
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// In-memory storage for survey responses (for demonstration purposes)
let surveyResponses = [];

// Endpoint to handle form submissions
app.post('/submit-survey', (req, res) => {
    const response = req.body;
    surveyResponses.push(response); // Store the response
    console.log('Received survey response:', response);
    res.status(200).json({ message: 'Survey response recorded successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});