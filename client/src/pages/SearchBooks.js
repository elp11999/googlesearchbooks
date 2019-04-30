//
// SearchBooks page
//
// SearchBooks.js
//

// Import the React library
import React, { Component } from "react";

// Import the API library
import API from "../utils/API";


import '../App.css';

// Inline CSS styles
const styles = {
  container: {
    marginTop: 50,
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
  image : {
    display: 'block',
    float: 'left',
    marginRight: 5
  },
  title: {
    fontSize: 25,
    fontWeight: 500
  },
  author: {
    fontSize: 20
  },
  description: {
    fontSize: 18
  },
  button: {
    marginTop: 25,
    marginLeft: 10
  },
  li: {
    listStyle: 'none'
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

  loadBooks = () => {
    API.getBooks("packers")
      .then(res => {
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
    console.log('A name was submitted: ' + this.state.searchValue);
    this.loadBooks();
  }

  // Function to construct Login page of the UI
  render() {
    let id = 1;

    if (this.state.bookCount > 0) {
      console.log(this.state.bookCount);
      for (let i = 0; i < this.state.books.items.length; i++) {
        console.log(this.state.books.items[i].volumeInfo);
      }
    }

    return (
      <div>
        <div className="container" style={ styles.container }>
          <p><span style={styles.header}>Search for book</span></p>
          <div className="form form-group">
            <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange}></input>
            <input className="btn btn-primary" type="submit" value="Search" style={styles.button} onClick={this.handleSubmit}/>
          </div>
        </div>
        <div className="container" style={ styles.container }>
            {this.state.bookCount ? (
              <div>                
                <p><span style={styles.header}>Search results</span></p>
                <ul>
                  {this.state.books.items.map(book => (
                    <li key={id++} style={ styles.li }>
                      <hr />
                      <p><span style={ styles.title }>{book.volumeInfo.title}</span></p>
                      <p><span style={ styles.author }>Written by {book.volumeInfo.authors[0]}</span></p>
                      <div className="cfix">
                        <img style={ styles.image } src={book.volumeInfo.imageLinks.thumbnail} alt="thumbnail"></img>
                        <p><span style={ styles.description }>{book.volumeInfo.description}</span></p>
                      </div>
                      <input className="btn btn-primary" type="submit" value="View" style={styles.button}/>
                      <input className="btn btn-primary" type="submit" value="Save" style={styles.button}/>
                    </li>
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