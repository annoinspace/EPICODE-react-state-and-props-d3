import { Component } from "react"
import { Form, Button } from "react-bootstrap"
import SingleBook from "./SingleBook"
import CommentArea from "./CommentArea"
import AddComment from "./AddComment"
// import React, { useState } from "react"

class BookList extends Component {
  state = {
    searchQuery: "",
    selectedBook: false
  }

  toggleBook = (e) => {
    this.setState((prevState) => ({ selectedBook: !prevState.selectedBook }))

    console.log("clicked")
    console.log(e.target)
  }

  staySelected = (e) => {
    this.setState((prevState) => ({ selectedBook: prevState.selectedBook }))
  }

  render() {
    return (
      <div>
        <Form className="d-flex m-5 w-25">
          <Form.Control
            type="search"
            placeholder="Search for books"
            className="me-2"
            aria-label="Search"
            onChange={(e) => this.setState({ searchQuery: e.target.value })}
          />
          <Button variant="outline-primary">Search</Button>
        </Form>

        <div className="bookListWrapper">
          <div className="books">
            {this.props.ListOfBooks.filter((book) =>
              book.title.toLowerCase().includes(this.state.searchQuery)
            ).map((book) => (
              <div className="bookcard" key={book.asin}>
                <SingleBook
                  book={book}
                  // adding props to the book
                  selectedBook={this.state.selectedBook}
                  changeSelectedBook={(asin) =>
                    this.setState({
                      selectedBook: asin
                    })
                  }
                />
              </div>
            ))}
          </div>
          <div className="commentSection">
            <h2>comment section</h2>
            {this.state.selectedBook && (
              <div>
                <CommentArea
                  asin={this.state.selectedBook}
                  // onClick={this.staySelected}
                />
                <AddComment asin={this.state.selectedBook.asin} />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default BookList
