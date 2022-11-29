import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
// import { Component } from "react"

import romance from "./data/romance.json"
import BookList from "./components/BookList.jsx"

const App = () => {
  return (
    <div className="App">
      <div>
        <BookList ListOfBooks={romance} />
      </div>
    </div>
  )
}

export default App
