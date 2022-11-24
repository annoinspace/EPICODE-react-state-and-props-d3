import { Card } from "react-bootstrap"
import { Component } from "react"

import CommentArea from "./CommentArea"
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

  render() {
    const { selectedBook } = this.state
    return (
      <Card
        onClick={this.toggleBook}
        className={selectedBook ? "border-blue" : "border-none"}
        style={{ width: "12rem" }}
      >
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body>
          <h5>{this.props.book.title}</h5>
          <Card.Text> {this.props.book.category} </Card.Text>
          {this.state.selectedBook && (
            <div>
              <CommentArea bookId={this.props.book.asin} />
            </div>
          )}
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
