import React, { useContext } from "react";
import useInput from "../hooks/useInput";
import { getUserLogged, login, putAccessToken } from "../utils/network-data";
import AuthContext from "../context/AuthContext";
import PropTypes from "prop-types";
import ButtonSubmit from "../components/ButtonSubmit";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    login({ email, password }).then((response) => {
      if (!response.error) {
        putAccessToken(response.data.accessToken)
        getUserLogged().then((sesion) => {
          if (!sesion.error) {
            setAuth(response.data);
          } else {
            setAuth(null);
          }
          navigate('/');
        }).catch(() => {
          alert(response.error);
        })
      }
    });
  };

  return (
    <div className="add-new-page__input">
      <strong>Yuk, login untuk menggunakan aplikasi.</strong>
      <div className="input-login">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={onEmailChange} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={onPasswordChange}
        />
       <ButtonSubmit title='login' onClick={ handleSubmit } />
       <p>Belum punya Akun? <Link to='/register'>click disini</Link></p>
      </div>
    </div>
  );
}

LoginPage.proptypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
}

export default LoginPage;
