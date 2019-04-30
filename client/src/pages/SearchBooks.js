//
// SearchBooks page
//
// SearchBooks.js
//

// Import the React library
import React, { Component } from "react";

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
    fontSize: 25
  },
  button: {
    marginTop: 25
  }
};

//
// https://developers.google.com/books/docs/v1/getting_started
//

// SearchBooks class
class SearchBooks extends Component {
  state = {value: ''};

  handleChange = (event) => {
    event.preventDefault();
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {    
    console.log('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  // Function to construct Login page of the UI
  render() {
    return (
      <div className="container" style={ styles.container }>
        <p><span style={styles.header}>Search for book</span></p>
        <div className="form form-group">
          <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange}></input>
          <input className="btn btn-primary" type="submit" value="Search" style={styles.button} onClick={this.handleSubmit}/>
        </div>
      </div>
    );
  }
}

// Export the Usage UI page
export default SearchBooks;