// Import the necessary modules and controllers
const express = require('express');
const router = express.Router();
const issueController = require('../controller/issue_controller');
const projectController = require('../controller/project_controller'); // Adjust the relative path as needed
 // Import the controller for handling routes

// Handle POST request to '/add-task' URL
router.post('/create', projectController.createProject);
router.get('/:projectId/create-issue', issueController.createIssue);
router.post('/:projectId/new-issue', issueController.newIssue);

module.exports = router; // Export the router for use in other parts of the application
