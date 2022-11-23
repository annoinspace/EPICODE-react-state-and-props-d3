import { Badge } from "react-bootstrap"

const MyBadge = ({ color, text }) => {
  return <Badge variant={color}>{text}</Badge>
}

export default MyBadge
