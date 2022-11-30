import { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap"

const AddComment = ({ asin }) => {
  const [usercomment, setUsercomment] = useState({
    comment: "",
    rate: 1,
    elementId: null
  })
  // onChangeHandler = (value, fieldToSet) => {
  //   this.setState({
  //     usercomment: {
  //       ...this.state.usercomment,
  //       [fieldToSet]: value
  //     }
  //   })
  // }
  // componentDidUpdate(prevProps) {
  //   if (prevProps.asin !== this.props.asin) {
  //     this.setState({
  //       comment: {
  //         ...this.state.comment,
  //         elementId: this.props.asin
  //       }
  //     })
  //   }
  // }

  useEffect(() => {
    console.log("no idea what is happening")
  }, [usercomment])

  const sendComment = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(usercomment),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzczYTZmMTNhN2ZjNDAwMTU5N2VjMzQiLCJpYXQiOjE2NjkyOTYxNDgsImV4cCI6MTY3MDUwNTc0OH0.W76RGzP36ffco5AYQ_-N4bajwbw6S-r_NidO0S-fn2M"
          }
        }
      )
      if (response.ok) {
        alert("Comment was sent!")
      } else {
        console.log("error")
        alert("something went wrong")
      }
    } catch (error) {
      console.log("error")
    }
  }

  return (
    <div>
      <h5>Post Your Comment here!</h5>
      <Form onSubmit={sendComment}>
        <Form.Group>
          <Form.Label>Your Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Comment Here!"
            required
            value={usercomment.comment}
            onChange={(e) =>
              setUsercomment({ ...usercomment, comment: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control
            as="select"
            value={usercomment.rate}
            onChange={(e) =>
              setUsercomment({ ...usercomment, rate: e.target.value })
            }
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

export default AddComment
