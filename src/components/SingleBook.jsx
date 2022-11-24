import { Card } from "react-bootstrap"
import { Component } from "react"

import CommentArea from "./CommentArea"
import AddComment from "./AddComment"
import "../App.css"

class SingleBook extends Component {
  state = {
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
    const { selectedBook } = this.state
    return (
      <Card
        className={selectedBook ? "border-blue" : "border-none"}
        style={{ width: "12rem" }}
      >
        <Card.Img
          variant="top"
          src={this.props.book.img}
          onClick={this.toggleBook}
        />
        <Card.Body>
          <h5>{this.props.book.title}</h5>
          {this.state.selectedBook && (
            <div>
              <CommentArea
                bookId={this.props.book.asin}
                onClick={this.staySelected}
              />
              <AddComment bookId={this.props.book.asin} />
            </div>
          )}
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
