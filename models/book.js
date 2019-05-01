//
// Google search books application
//
// This NodeJS Application is a React-based Google Books Search application.
//
// Users can search for books via the Google Books API and render them here.
// Users have the option to "View" a book, bringing them to the book on Google Books,
// or "Save" a book, saving it to the Mongo database.
// 
// Users can also see all books saved to the Mongo database. Users have an option to
// "View" the book, bringing them to the book on Google Books, or "Delete" a book,
// removing it from the Mongo database.
//
// Book.js - Book Mongoose database schema

// Load mongoose library
var mongoose = require("mongoose");

// Get reference to the Mongoose Schema constructor
var Schema = mongoose.Schema;

// Create Book database schema
var BookSchema = new Schema({
    // Book ID
    id: {
        type: String,
        required: true,        
        unique: true    // Make id be a unique key
    },
    // Book Title
    title: {
        type: String,
        required: true
    },

    // Book Author
    author: {
        type: String,
        required: true
    },

    // Book Link
    link: {
        type: String,
        required: true
    },

    // Book Description
    description: {
        type: String,
        required: true
    },

    // Book Image
    image: {
        type: String,
        required: false
    }
});

// Create the Book model
var Book = mongoose.model("Book", BookSchema);

// Export the Book model
module.exports = Book;
