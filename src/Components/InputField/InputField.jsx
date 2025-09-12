import styles from "./styles.module.css";

function InputField({label, type, value, onChange, name }) {
  let labelElement;

  if (label) {
    labelElement = <label  className={styles.label}>{label}</label>;
  }

  return (
    <div className={styles.field}>
      {labelElement}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
}

export default InputField;