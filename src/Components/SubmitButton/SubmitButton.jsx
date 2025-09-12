import styles from "./styles.module.css";

function SubmitButton({text}) {
  return (
    <button type="submit" className={styles.button}>{text}</button>
  );
}

export default SubmitButton;
