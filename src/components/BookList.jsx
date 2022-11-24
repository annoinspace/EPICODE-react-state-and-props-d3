import SingleBook from "./SingleBook"
import { Component } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
// import React, { useState } from "react"

class BookList extends Component {
  state = {
    searchQuery: ""
  }

  render() {
    return (
      <div>
        <Form className="d-flex m-5 w-25">
          <Form.Control
            type="search"
            placeholder="Search for books"
            className="me-2"
            aria-label="Search"
            onChange={(e) => this.setState({ searchQuery: e.target.value })}
          />
          <Button variant="outline-primary">Search</Button>
        </Form>

        <Container>
          <Row>
            {this.props.ListOfBooks.filter((book) =>
              book.title.toLowerCase().includes(this.state.searchQuery)
            ).map((book) => (
              <Col key={book.asin}>
                <SingleBook book={book} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    )
  }
}
export default BookList
