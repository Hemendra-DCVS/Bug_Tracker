// Import the Mongoose library
const mongoose = require('mongoose');
const Schema = mongoose.Schema; // Add this line to import Schema
const issue =require('./issue')

// Define a new Mongoose schema for tasks
const projectSchema = new mongoose.Schema({
    // Define a field for task description, which is a required string
    projectTitle: {
        type: String,
        required: true
    },
    // Define a field for task category, which is a string (optional)
    description : {
        type: String,
        required: true
    },
    Author : {
        type : String,
        required: true
       
    },
    issues: [
        { type: Schema.Types.ObjectId,
        ref: 'issue' }],
        
}, { timestamps: true } );

// Create a Mongoose model for tasks using the defined schema
const project = mongoose.model('project', projectSchema);

// Export the Task model to be used in other parts of the application
module.exports = project;
