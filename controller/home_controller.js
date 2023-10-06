// Import the Task model for working with tasks
// const Task = require("../models/task");
const Project = require('../models/project');
// Controller function to handle the GET request for the home page
module.exports.home = async function (req, res) {
      try {
        // Fetch the list of projects from the database
        const all_projects = await Project.find();
        
        // Render the 'home' EJS template and pass the 'projects' data
        return res.render('home', { all_projects });
      } catch (error) {
            console.error('Error fetching projects:', error); // Log the error for debugging
            // Handle errors, e.g., display an error message or redirect to an error page
            res.status(500).send('An error occurred while fetching the projects.');
      }
    };
    


// try {
//       // Fetch the list of projects from the database
//       const projects = await Project.find();
  
//       // Render the 'projects' EJS template and pass the 'projects' data
//       res.render('projects/list', { projects });
//     } catch (error) {
//       console.error(error);
//       // Handle errors, e.g., display an error message or redirect to an error page
//       res.status(500).send('An error occurred while fetching the projects.');
//     }