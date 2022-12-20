import styles from "./Card.module.css";

function Card({ children }) {
  return <div className={styles.card}>{childern}</div>;
}

export default Card;
