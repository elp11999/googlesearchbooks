import axios from "axios";

const GoogleApi = " https://www.googleapis.com/books/v1/volumes";

export default {
  // Get books from Google
  getBooks: function(query) {
    let queryString = GoogleApi + "?q=" + query.replace(" ", "+");
    return axios.get(queryString);
  },
  // Get books from database
  getBook: function() {
    return axios.get("/api/books/");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};