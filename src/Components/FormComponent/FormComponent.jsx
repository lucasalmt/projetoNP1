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

    if (form.password !== form.confirmPassword) {
      alert("Senhas diferentes");
      return;
    }

    console.log("Formulário enviado", form);
  };

  return (
    <section id="login">
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>CONECTE-SE AQUI</h2>
        <h3 className={styles.title}>Criar conta</h3>

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

        <div className={styles.formContainer}>
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
        </div>

        <SubmitButton text="Cadastrar" />
      </form>
    </section>
  );
}

export default FormComponent;
