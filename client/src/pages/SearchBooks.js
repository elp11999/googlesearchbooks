//
// SearchBooks page
//
// SearchBooks.js
//

// Import the React library
import React, { Component } from "react";

// Import the API library
import API from "../utils/API";

// Import the BookList component
import Book from "../components/Book";

// Inline CSS styles
const styles = {
  topcontainer: {
    marginTop: 100,
    marginBottom: 10,
    borderStyle: 'solid',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'grey',
    paddingTop: 5,
  },
  container: {
    marginTop: 50,
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

//
// https://developers.google.com/books/docs/v1/getting_started
//

// SearchBooks class
class SearchBooks extends Component {
  state = {
      searchValue: '',
      bookCount:  0,
      books: []
  };

  loadBooks = (query) => {
    API.getBooks(query)
      .then(res => {
        console.log(res);
        for (let i = 0; i < res.data.items.length; i++)
          res.data.items[i].volumeInfo._bookId = i; 
        this.setState({ books: res.data});
        this.setState({ bookCount: res.data.items.length});
      })
      .catch(err => console.log(err));
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({searchValue: event.target.value});
  }

  handleSubmit = (event) => { 
    event.preventDefault();  
    this.loadBooks(this.state.searchValue);
  }

  // Function to handle the save button
  handleSave = (id) => { 

    // Crete book object to save to database
    const bookInfo = {
      id: this.state.books.items[id].id,
      author: this.state.books.items[id].volumeInfo.authors[0],
      description: this.state.books.items[id].volumeInfo.description,
      image: this.state.books.items[id].volumeInfo.imageLinks.thumbnail,
      link: this.state.books.items[id].volumeInfo.infoLink,
      title: this.state.books.items[id].volumeInfo.title
    }
    console.log(bookInfo);

    // Save book to database
    API.saveBook(bookInfo)
      .then(res =>  console.log(res))
      .catch(err => console.log(err));
    
  }

  // Function to construct Login page of the UI
  render() {
    return (
      <div>>
        <div className="topcontainer container" style={ styles.topcontainer }>
          <p><span style={styles.header}>Search for book</span></p>
          <div className="form form-group cfix">
            <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange}></input>
            <input className="btn btn-primary" type="submit" value="Search" style={styles.button} onClick={this.handleSubmit}/>
          </div>
        </div>
        <div className="container" style={ styles.container }>
            {this.state.bookCount ? (
              <div>                
                <p><span style={styles.header}>Search results</span></p>
                <ul style={styles.ul}>
                  {this.state.books.items.map(book => (
                   <Book key={book.volumeInfo._bookId}
                         title={book.volumeInfo.title}
                         author={book.volumeInfo.authors[0]}
                         description={book.volumeInfo.description}
                         image={book.volumeInfo.imageLinks.thumbnail}
                         link={book.volumeInfo.infoLink}
                         buttonText={"Save"}
                         onSave={() => this.handleSave(book.volumeInfo._bookId)}
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

// Export the Usage UI page
export default SearchBooks;