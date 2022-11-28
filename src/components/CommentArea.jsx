import { Component } from "react"
import { ListGroup } from "react-bootstrap"

class CommentArea extends Component {
  state = {
    comments: []
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log("prevProps", prevProps)
    console.log("currentProps", this.Props)

    if (prevProps.aisn !== this.props.asin) {
      console.log("time to fetch the new comments")
      this.fetchComments()
    }
  }

  fetchComments = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
        {
          headers: {
            method: "GET",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzczYTZmMTNhN2ZjNDAwMTU5N2VjMzQiLCJpYXQiOjE2NjkyOTYxNDgsImV4cCI6MTY3MDUwNTc0OH0.W76RGzP36ffco5AYQ_-N4bajwbw6S-r_NidO0S-fn2M"
          }
        }
      )
      if (response.ok) {
        let data = await response.json()
        this.setState({ comments: data })
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  componentDidMount() {
    this.fetchComments()
  }
  render() {
    console.log(this.props.asin)
    return (
      <div>
        <hr></hr>
        <h5>Comments</h5>
        <ListGroup>
          {this.state.comments.map((comment, _id) => (
            <ListGroup.Item key={_id}>{comment.comment}</ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    )
  }
}

export default CommentArea
