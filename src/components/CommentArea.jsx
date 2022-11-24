import { Component } from "react"
import { ListGroup, Alert } from "react-bootstrap"

class CommentArea extends Component {
  state = {
    comments: []
  }

  fetchComments = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.bookId}`,
        {
          headers: {
            Authorisation:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzczYTZmMTNhN2ZjNDAwMTU5N2VjMzQiLCJpYXQiOjE2NjkyOTYxNDgsImV4cCI6MTY3MDUwNTc0OH0.W76RGzP36ffco5AYQ_-N4bajwbw6S-r_NidO0S-fn2M"
          }
        }
      )
      if (response.ok) {
        let data = await response.json()
        console.log(data)
        this.setState({ comments: data })
      } else {
        console.log("error fetching the comments :(")
      }
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    console.log("COMPONENTDIDMOUNT FIRED!")

    this.fetchComments()
  }

  render() {
    console.log(this.props.bookId)
    return (
      <div>
        <h5>Comments</h5>
        <ListGroup>
          {this.state.comments.map((comment) => (
            <ListGroup.Item key={comment._id}>{comment.comment}</ListGroup.Item>
          ))}
          {this.state.isError && (
            <Alert variant="danger">Whoopsie, something went wrong! :(</Alert>
          )}
        </ListGroup>
      </div>
    )
  }
}

export default CommentArea
