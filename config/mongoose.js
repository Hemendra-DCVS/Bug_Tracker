// Import the Mongoose library
const mongoose = require('mongoose');
require('dotenv').config();


// Get the database connection URL from the environment variables (loaded from .env)
const dbConnectionUrl = process.env.DB_CONNECTION_URL;

// Connect to the MongoDB database with the specified URL
mongoose.connect(dbConnectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  });
// Get a reference to the database connection
const db = mongoose.connection;

// Event handler for database connection errors
db.on('error', console.error.bind(console, 'error connecting to the database'));

// Event handler for a successful database connection
db.once('open', function(){
    // Log a message indicating a successful database connection
    console.log('Connected to MongoDB database')
})
