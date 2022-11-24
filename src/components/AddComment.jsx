import { Component } from "react"
import { Form, Button } from "react-bootstrap"

class AddComment extends Component {
  state = {
    usercomment: {
      comment: "",
      rate: 1,
      elementId: this.props.bookId
    }
  }

  onChangeHandler = (value, fieldToSet) => {
    this.setState({
      usercomment: {
        ...this.state.usercomment,
        [fieldToSet]: value
      }
    })
  }

  onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.usercomment),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzczYTZmMTNhN2ZjNDAwMTU5N2VjMzQiLCJpYXQiOjE2NjkyOTYxNDgsImV4cCI6MTY3MDUwNTc0OH0.W76RGzP36ffco5AYQ_-N4bajwbw6S-r_NidO0S-fn2M"
          }
        }
      )
      console.log(response)
      if (response.ok) {
        alert("comment saved!")
        this.setState({
          usercomment: {
            comment: "",
            rate: 1,
            elementId: this.props.bookId
          }
        })
      } else {
        console.log("something went wrong :(")
      }
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <div>
        <h2>Post Your Comment here!</h2>
        <Form onSubmit={this.onSubmitHandler}>
          <Form.Group>
            <Form.Label>Your Comment</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Comment Here!"
              required
              value={this.state.usercomment.comment}
              onChange={(e) => this.onChangeHandler(e.target.value, "comment")}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Rating</Form.Label>
            <Form.Control
              as="select"
              value={this.state.usercomment.rate}
              onChange={(e) => this.onChangeHandler(e.target.value, "rate")}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Post Comment!
          </Button>
        </Form>
      </div>
    )
  }
}

export default AddComment