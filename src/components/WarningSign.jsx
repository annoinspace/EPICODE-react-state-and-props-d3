import { Alert } from "react-bootstrap"

const WarningSign = (props) => {
  return (
    <div>
      <Alert variant="danger">{props.text}</Alert>
    </div>
  )
}

export default WarningSign
