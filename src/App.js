import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import WarningSign from "./components/WarningSign"
import MyBadge from "./components/MyBadge"
// import SingleBook from "./components/SingleBook"
import romance from "./data/romance.json"
import BookList from "./components/BookList.jsx"

function App() {
  return (
    <div className="App">
      <WarningSign text="YOU ARE IN DANGER!!!!!!" />
      <MyBadge color="success" text="a gorgeous badge" />
      {/* <SingleBook book={romance[0]} /> */}
      <BookList ListOfBooks={romance} />
    </div>
  )
}

export default App
