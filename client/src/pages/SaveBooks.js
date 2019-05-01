//
// SaveBooks page
//
// SaveBooks.js
//

// Import the React library
import React, { Component } from "react";

// Import the API library
import API from "../utils/API";

// Import the BookList component
import Book from "../components/Book";

// Inline CSS styles
const styles = {
  container: {
    marginTop: 120,
    marginBottom: 10,
    borderStyle: 'solid',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'grey',
    paddingTop: 5,
  },
  header: {
    fontSize: 30,
    fontWeight: 500
  },
  button: {
    float: 'right',
    marginTop: 25,
    marginLeft: 10
  },
  ul: {
    padding: 0
  }
};

// SearchBooks class
class SaveBooks extends Component {
  state = {
      books: []
  };

  // Function to load all save books at startup
  componentDidMount() {
    this.loadBooks();
  }

  // Function to load all books from the database
  loadBooks = () => {
    API.getBook()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  // Function to handle the delete button
  handleDelete = (id) => { 
    console.log(id);    

    // Delete book frome database
    API.deleteBook(id)
      .then(res =>  console.log(res))
      .catch(err => console.log(err));
    this.loadBooks();    
  }

  // Function to construct Login page of the UI
  render() {
    return (
      <div>
        <div className="container" style={ styles.container }>
            {this.state.books.length ? (
              <div>                
                <p><span style={styles.header}>Saved Books</span></p>
                <ul style={styles.ul}>
                  {this.state.books.map(book => (
                   <Book key={book.id}
                         title={book.title}
                         author={book.author}
                         description={book.description}
                         image={book.image}
                         link={book.link}
                         buttonText={"Delete"}
                         onSave={() => this.handleDelete(book.id)}
                   />
                  ))}
                </ul>
              </div>
            ) : (
              <p><span style={styles.header}>No results to display</span></p>
            )}
        </div>
      </div>
    );
  }
}

// Export the SaveBooks UI page
export default SaveBooks;