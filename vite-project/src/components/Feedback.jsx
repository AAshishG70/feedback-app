import { FaTimes } from "react-icons/fa";
import styles from "./Feedback.module.css";

function Feedback({ item, deleteFeedback }) {
  return (
    <>
      <h1>{item.text}</h1>
      <button onClick={() => deleteFeedback(item)} className={close}>
        <FaTimes color="deeppink" />
      </button>
    </>
  );
}

export default Feedback;
