// import { Component } from "react"
import { useEffect, useState } from "react"
import { ListGroup } from "react-bootstrap"

const CommentArea = () => {
  // state = {
  //   comments: []
  // }

  const [comments, setComments] = useState([])

  const fetchComments = async () => {
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

  // componentDidMount() {
  //   this.fetchComments()
  // }

  useEffect(() => {
    console.log("Book finished mounting")
    fetchComments()
  }, [])

  // componentDidUpdate = (prevProps, prevState) => {
  //   if (prevProps.asin !== this.props.asin) {
  //     this.fetchComments()
  //   }
  // }
  useEffect(() => {
    fetchComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [this.props.asin])

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

export default CommentArea
