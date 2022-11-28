import { Card } from "react-bootstrap"
import { Component } from "react"

import "../App.css"

class SingleBook extends Component {
  // toggleBook = (e) => {
  //   this.setState((prevState) => ({ selectedBook: !prevState.selectedBook }))

  //   console.log("clicked")
  //   console.log(e.target)
  // }

  // staySelected = (e) => {
  //   this.setState((prevState) => ({ selectedBook: prevState.selectedBook }))
  // }

  render() {
    // const { selectedBook } = this.state
    return (
      <Card
        onClick={(e) => this.props.changeSelectedBook(this.props.book.asin)}
        // className={this.state.selectedBook ? "border-blue" : "border-none"}
        style={{ width: "15rem" }}
      >
        <Card.Img
          variant="top"
          src={this.props.book.img}
          onClick={this.toggleBook}
        />
        <Card.Body>
          <p>
            <strong>{this.props.book.title}</strong>
          </p>
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
