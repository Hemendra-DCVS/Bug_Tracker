// Import the Mongoose library
const mongoose = require('mongoose');

// Define a new Mongoose schema for tasks
const issueSchema = new mongoose.Schema({
    // Define a field for task description, which is a required string
    issueTitle: {
        type: String,
        required: true
    },
    
    // Define a field for task category, which is a string (optional)
    description: {
        type: String,
        required: true
    },
    Author: {
        type: String,
        required: true
    },
    labels: {
        type: String,
    }
},    { timestamps: true });

// Create a Mongoose model for tasks using the defined schema
const issue = mongoose.model('issue', issueSchema);

// Export the Task model to be used in other parts of the application
module.exports = issue;
