// Import the necessary modules and controllers
const express = require('express');
const router = express.Router();

const projectController = require('../controller/project_controller'); // Adjust the relative path as needed
 // Import the controller for handling routes

// Handle POST request to '/add-task' URL
router.post('/create', projectController.createProject);



module.exports = router; // Export the router for use in other parts of the application
