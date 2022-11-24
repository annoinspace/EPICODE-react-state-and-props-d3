import { Card } from "react-bootstrap"
import { Component } from "react"
import "../App.css"
// import romance from "../data/romance.json"

// const SingleBook = () => {
//   return romance.slice(0, 1).map((book) => (
//     <Card style={{ width: "18rem" }}>
//       <Card.Img variant="top" src={book.img} />
//       <Card.Body>
//         <Card.Title>{book.title}</Card.Title>
//         <Card.Text>This book is from the {book.category} section.</Card.Text>
//       </Card.Body>
//     </Card>
//   ))
// }

class SingleBook extends Component {
  state = {
    selectedBook: false
  }

  toggleBook = (e) => {
    this.setState((prevState) => ({ selectedBook: !prevState.selectedBook }))
    // this.setState((current) => !current)
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
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text> {this.props.book.category} </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
