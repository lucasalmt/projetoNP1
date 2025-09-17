import styles from "./styles.module.css";

function InputField({ label, type, value, onChange, name }) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={styles.input}
        required
      />
    </div>
  );
}

export default InputField;
