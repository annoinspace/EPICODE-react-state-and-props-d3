import { Form, Button } from "react-bootstrap"

const SearchBar = () => {
  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search for books"
        className="me-2"
        aria-label="Search"
      />
      <Button variant="outline-primary">Search</Button>
    </Form>
  )
}
export default SearchBar
