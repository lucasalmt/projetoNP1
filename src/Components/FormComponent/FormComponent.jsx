import { useState } from "react";
import InputField from "../InputField/InputField.jsx";
import SubmitButton from "../SubmitButton/SubmitButton.jsx";
import styles from "./styles.module.css";

function FormComponent() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>Crie uma conta</h2>

      <InputField
        label="Nome"
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <InputField
        label="E-mail"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />

      <InputField
        label="Senha"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />

      <InputField
        label="Confirmação de Senha"
        type="password"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChange}
      />

      <SubmitButton text="Cadastrar" />
    </form>
  );
}

export default FormComponent;
