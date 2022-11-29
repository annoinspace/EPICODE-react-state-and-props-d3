import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import SingleBook from "./SingleBook"
import CommentArea from "./CommentArea"
import AddComment from "./AddComment"
// import React, { useState } from "react"

const BookList = (props) => {
  // state = {
  //   searchQuery: "",
  //   selectedBook: null
  // }

  // toggleBook = (e) => {
  //   this.setState((prevState) => ({ selectedBook: !prevState.selectedBook }))

  //   console.log("clicked")
  //   console.log(e.target)
  // }

  // staySelected = (e) => {
  //   this.setState((prevState) => ({ selectedBook: prevState.selectedBook }))
  // }

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedBook, setSelectedBook] = useState(null)

  return (
    <div>
      <Form className="d-flex m-5 w-25">
        <Form.Control
          type="search"
          placeholder="Search for books"
          className="me-2"
          aria-label="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button variant="outline-primary">Search</Button>
      </Form>

      <div className="bookListWrapper">
        <div className="books">
          {props.ListOfBooks.filter((book) =>
            book.title.toLowerCase().includes(searchQuery)
          ).map((book) => (
            <div className="bookcard" key={book.asin}>
              <SingleBook
                book={book}
                // adding props to the book
                selectedBook={selectedBook}
                changeSelectedBook={(asin) =>
                  setSelectedBook({
                    selectedBook: asin
                  })
                }
              />
            </div>
          ))}
        </div>
        <div className="commentSection">
          <h2>comment section</h2>
          {selectedBook && (
            <div>
              <CommentArea
                asin={selectedBook}
                // onClick={this.staySelected}
              />
              <AddComment asin={selectedBook.asin} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default BookList
