import { Component } from "react"
import { ListGroup, Alert } from "react-bootstrap"

class CommentsList extends Component {
  state = {
    comments: []
  }

  fetchComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/"
      )
      if (response.ok) {
        // everything looks ok :)
        let data = await response.json()
        console.log(data)
        // data is the array of reservations we're getting back from the API
        //   this.setState({
        //     reservations: data,
        //     isLoading: false,
        //   })
      } else {
        console.log("error fetching the comments :(")
        // server reached, but it encountered a problem with our request
        setTimeout(() => {
          this.setState({
            isLoading: false,
            isError: true
          })
        }, 1000)
      }
    } catch (error) {
      console.log(error)

      // this.setState({
      //   isLoading: false,
      //   isError: true,
      // })
    }
  }

  componentDidMount() {
    console.log("COMPONENTDIDMOUNT FIRED!")

    this.fetchComments()
  }

  render() {
    return (
      <div>
        <h5>Comments</h5>
        <ListGroup className="mt-4">
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

export default CommentsList
