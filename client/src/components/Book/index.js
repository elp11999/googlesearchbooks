//
// Book Component
//
// Book.js
//

// Import the React library
import React, { Component } from "react";

// Inline CSS styles
const styles = {
  image : {
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
    float: 'right',
    marginTop: 25,
    marginLeft: 10
  },
  li: {
    listStyle: 'none'
  },
  hr: {
    borderWidth: 2,
    borderColor: "grey"
  }
};

class Book extends Component {
  render() {
    //console.log(this.props);
    return (
      <div>       
         <li key={this.props.id} style={ styles.li }>
            <hr style={ styles.hr } />
            <p><span style={ styles.title }>{this.props.title}</span></p>
            <p><span style={ styles.author }>Written by {this.props.author}</span></p>
            <img style={ styles.image } src={this.props.image} alt="thumbnail"></img>
            <p><span style={ styles.description }>{this.props.description}</span></p>
            <div className="cfix">
              <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                <input className="btn btn-primary" type="submit" value="View" style={styles.button}/>
              </a>
              <input className="btn btn-primary" type="submit" value={this.props.buttonText} style={styles.button} onClick={this.props.onSave}/>
            </div>
          </li>
      </div>
    );
  }
}

// Export the Book component
export default Book;

