import { FaTimes } from "react-icons/fa";
import Card from "./common/Card";
import styles from "./Feedback.module.css";

function Feedback({ item, deleteFeedback }) {
  function handledelete() {
    deleteFeedback(item.id);
  }
  return (
    <Card>
      <h1>{item.text}</h1>
      <div className="num-display">{item.rating}</div>
      <button onClick={handledelete} className="close">
        <FaTimes color="purple" />
      </button>
    </Card>
  );
}

export default Feedback;
