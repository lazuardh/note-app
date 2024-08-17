import React from "react";
import useInput from "../hooks/useInput";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../utils/network-data";
import ButtonSubmit from "../components/ButtonSubmit";

function RegisterPage() {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPassword, onConfirmPasswordChange] = useInput("");
  const navigate = useNavigate();

  const submitHandle = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Confirm password tidak sesuai!");
    }

    register({ name, email, password })
      .then((response) => {
        if (!response.error) {
          navigate("/*");
        }
      })
      .catch(() => {
        alert(response.error);
      });
  };

  return (
    <div className="add-new-page__input">
      <strong>Yuk, login untuk menggunakan aplikasi.</strong>
      <div className="input-login">
        <label htmlFor="name">name</label>
        <input type="text" id="name" value={name} onChange={onNameChange} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={onEmailChange} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={onPasswordChange}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={onConfirmPasswordChange}
        />
        <ButtonSubmit title="register" onClick={submitHandle} />
        <p>
          Sudah punya Akun? <Link to="/*">Login disini</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
