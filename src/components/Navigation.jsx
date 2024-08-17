import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from 'react-icons/fi';
import { putAccessToken } from "../utils/network-data";
import AuthContext from "../context/AuthContext";
import ThemeToggled from "../components/ThemeToggled";


function Navigation() {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const handleLogout = () => {
    localStorage.removeItem('accessToken')

    setAuth(null);
    putAccessToken('');

    navigate('/*')
  }

  return (
    <>
      <h1>
        <Link to="/">Aplikasi Catatan</Link>
      </h1>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/archives">Arsip</Link>
          </li>
          <li><ThemeToggled /></li>
          <li>
          <button onClick={ handleLogout }><FiLogOut /></button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
