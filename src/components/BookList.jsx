import SingleBook from "./SingleBook"
import { Component } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import React, { useState } from "react"

class BookList extends Component {
  state = {}

  onChangeHandler = (value, fieldToSet) => {
    this.setState({
      ListOfBooks: {
        ...this.state.ListOfBooks,
        [fieldToSet]: value
      }
    })
  }

  // [searchInput, setSearchInput] = useState("")
  //  books = ListOfBooks

  //  handleChange = (e) => {
  //     e.preventDefault();
  //     setSearchInput(e.target.value);
  //   };

  //   if (searchInput.length > 0) {
  //       countries.filter((country) => {
  //       return country.name.match(searchInput);
  //   });
  //   }

  render() {
    return (
      <Container>
        <Row className=" d-flex justify-content-end mb-3">
          {/* <div>

<input
   type="text"
   placeholder="Search here"
   onChange={handleChange}
   value={searchInput} />


{books.map((book, index) => {
  <Col key={book.asin}>
  <SingleBook book={book} />
</Col>
})}


</div> */}

          {
            <Form className="d-flex ">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={this.state.ListOfBooks}
                onChange={(e) => this.onChangeHandler(e.target.value)}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          }
        </Row>
        <Row>
          {this.props.ListOfBooks.map((book) => (
            <Col key={book.asin}>
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
}
export default BookList
