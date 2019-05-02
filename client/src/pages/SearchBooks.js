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
    borderColor: 'darkslategray',
    paddingTop: 5,
  },
  container: {
    marginTop: 50,
    marginBottom: 10,
    borderStyle: 'solid',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'darkslategray',
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
      books: []
  };

  loadBooks = (query) => {
    API.getBooks(query)
      .then(res => {
        let books = [];
        if (res.data.items) {
          for (let i = 0; i < res.data.items.length; i++) {

            // Check for duplicate id values
            let book = books.find((element) => { 
              return element.id === res.data.items[i].id; 
            });
            if (book)
              continue;
                          
            // Make sure we have a id
            if (!res.data.items[i].id)
              continue;  
            // Make sure we have a title
            if (!res.data.items[i].volumeInfo.title)
              continue;
            // Make sure we have a description
            if (!res.data.items[i].volumeInfo.description)
              continue;                            
            // Make sure we have an author
            if (!res.data.items[i].volumeInfo.authors)
              continue;
            // Make sure we have a image  
            if (!res.data.items[i].volumeInfo.imageLinks)
              continue;
            // Make sure we have a link  
            if (!res.data.items[i].volumeInfo.infoLink)
              continue;
              
            // Looks good so add the book object
            books.push(res.data.items[i]);
          } 
        }
        this.setState({ books: books});
      })
      .catch(err => console.log(err));
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({searchValue: event.target.value});
  }

  handleSubmit = (event) => { 
    event.preventDefault();
    if (this.state.searchValue.length > 0)  
      this.loadBooks(this.state.searchValue);
  }

  // Function to handle the save button
  handleSave = (id) => {

    // Find the book
    let book = this.state.books.find((element) => { 
      return element.id === id; 
    });
    if (!book)
      return;

    // Crete book object to save to database
    const bookInfo = {
      id: book.id,
      author: book.volumeInfo.authors[0],
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink,
      title: book.volumeInfo.title
    }

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
            {this.state.books.length ? (
              <div>                
                <p><span style={styles.header}>Search results</span></p>
                <ul style={styles.ul}>
                  {this.state.books.map(book => (
                   <Book key={book.id}
                         title={book.volumeInfo.title}
                         author={book.volumeInfo.authors[0]}
                         description={book.volumeInfo.description}
                         image={book.volumeInfo.imageLinks.thumbnail}
                         link={book.volumeInfo.infoLink}
                         buttonText={"Save"}
                         onSave={() => this.handleSave(book.id)}
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