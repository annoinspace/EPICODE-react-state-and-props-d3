import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import WarningSign from "./components/WarningSign"
import MyBadge from "./components/MyBadge"
import SingleBook from "./components/SingleBook"
import romance from "./data/romance.json"

function App() {
  return (
    <div className="App">
      <WarningSign text="YOU ARE IN DANGER!!!!!!" />
      <MyBadge color="secondary" text="a gorgeous badge" />
      <SingleBook book={romance[0]} />
    </div>
  )
}

export default App
