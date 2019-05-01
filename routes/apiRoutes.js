//
// WebScrape application
//
// This Application allows users to view and leave comments on the latest
// Green Bay Packer news. Go Pack!!!!
// 
// apiRoutes.js - Express API routes 
//

// Load Mongoose database schemas
const db = require("../models");

// Express routes
module.exports = function(app) {

    // Route to get all books from database
    app.get("/api/books", function(req, res) {
        db.Book.find({})
          .then(function(dbBooks) {
            // Send books to client
            res.json(dbBooks);
          })
          .catch(function(err) {
            console.log("Find failed: " + err);
            // Send error to client 
            res.json(err);
          });
    });    

    // Route to add book to the database
    app.post("/api/books", function(req, res) {
      db.Book.create(req.body)
        .then(function(dbNote) {
            // Send "ok" to client 
            res.json("ok");
        })
        .catch(function(err) {
          // Send error to client 
          res.json(err);
        });
    });

    // Route for removing a book from the database
    app.delete("/api/books/:id", function(req, res) {
      // Remove the book from database
      db.Book.deleteOne({ id: req.params.id })
        .then(function() {
          // Send a message to the client          
          res.json("ok");
        })
        .catch(function(err) {
          console.log("Remove failed:" + err);
          // Send error to client 
          res.json(err);
        });
    });

    // Use default react app if no api routes
    app.use(function(req, res){
      res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });   
};
