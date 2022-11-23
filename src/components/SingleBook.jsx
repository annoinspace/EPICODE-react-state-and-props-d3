import { Card } from "react-bootstrap"
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

const SingleBook = ({ book }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>This book is from the {book.category} section.</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SingleBook
