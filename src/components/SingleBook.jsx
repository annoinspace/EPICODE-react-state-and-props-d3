import { Card } from "react-bootstrap"
// import { Component } from "react"

import "../App.css"

const SingleBook = ({ book, changeSelectedBook, selectedBook }) => {
  // toggleBook = (e) => {
  //   this.setState((prevState) => ({ selectedBook: !prevState.selectedBook }))

  //   console.log("clicked")
  //   console.log(e.target)
  // }

  // staySelected = (e) => {
  //   this.setState((prevState) => ({ selectedBook: prevState.selectedBook }))
  // }

  // const { selectedBook } = this.state
  return (
    <Card
      onClick={(e) => changeSelectedBook(book.asin)}
      // className={this.state.selectedBook ? "border-blue" : "border-none"}
      style={{ width: "15rem" }}
    >
      <Card.Img
        variant="top"
        src={book.img}
        //  onClick={this.toggleBook}
      />
      <Card.Body>
        <p>
          <strong>{book.title}</strong>
        </p>
      </Card.Body>
    </Card>
  )
}

export default SingleBook
