import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import WarningSign from "./components/WarningSign"
import MyBadge from "./components/MyBadge"

function App() {
  return (
    <div className="App">
      <WarningSign text="YOU ARE IN DANGER!!!!!!" />
      <MyBadge color="secondary" text="a gorgeous badge" />
    </div>
  )
}

export default App
