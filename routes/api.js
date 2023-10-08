// Import the necessary modules and controllers
const express = require('express');
const router = express.Router();

const apiController = require('../controller/api_controller'); // Adjust the relative path as needed
 // Import the controller for handling routes

// Handle POST request to '/add-task' URL
router.get('/issues', apiController.issues);



module.exports = router; // Export the router for use in other parts of the application
