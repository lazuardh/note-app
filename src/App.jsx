import React, { useEffect, useMemo, useState } from "react";
import AddPage from "./pages/AddPage";
import NotFoundPage from "./pages/NotFound";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import DetailPageWrapper from "./pages/DetailPage";
import NotePageWrapper from "./pages/NotePage";
import { getUserLogged } from "./utils/network-data";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import useTheme from "./hooks/useTheme";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggled from "./components/ThemeToggled";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const [theme, changeTheme] = useTheme();
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true);

  const themeContextValue = useMemo(() => {
    theme, changeTheme
  }, [theme]);

  const authContextValue = useMemo(
    () => ({
      auth,
      setAuth,
    }),
    [auth]
  );

  useEffect(() => {
    getUserLogged()
      .then((response) => {
        if (!response.error) {
          setAuth(response.data);
        } else {
          setAuth(null);
        }
        setLoading(false);
      })
      .catch(() => {
        alert("error");
      });

    const saveTheme = localStorage.getItem('theme');
    if (saveTheme) {
      changeTheme(saveTheme);
    } else {
      localStorage.setItem("theme", 'dark');
      changeTheme('dark');
    }
  }, []);

  return (
    <ThemeProvider value={themeContextValue}>
      <AuthProvider value={authContextValue}>
        <div className="app-container">
          <header>
            {auth === null ? (
              <>
                <h1>Aplikasi Catatan</h1>
                <nav className="navigation">
                  <ul>
                    <li>
                      <ThemeToggled />
                    </li>
                  </ul>
                </nav>
              </>
            ) : (
              <Navigation />
            )}
          </header>
          <main>
            <Routes>
              {auth === null ? (
                <>
                  <Route path="/*" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                </>
              ) : (
                <>
                  <Route path="/" element={<NotePageWrapper />} />
                  <Route path="/notes/:id" element={<DetailPageWrapper />} />
                  <Route path="/notes/add" element={<AddPage />} />
                </>
              )}

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
