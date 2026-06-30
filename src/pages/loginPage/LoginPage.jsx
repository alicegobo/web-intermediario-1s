import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setName, toggleLogged } from '../../redux/slice/UserSlice';
import { useNavigate } from 'react-router-dom';
import "./LoginPage.css";

function LoginPage() {
  const [user, setUser] = useState({ name: "", password: "" });
  const [focused, setFocused] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    dispatch(setName(user.name));
    dispatch(toggleLogged());
    navigate("/");
  };

  return (
    <div className="loginPage">
      {/* Background glow */}
      <div className="bg-glow" />

      {/* Floating hearts */}
      <div className="hearts-container" aria-hidden="true">
        <span className="heart-float">🌸</span>
        <span className="heart-float">💕</span>
        <span className="heart-float">✨</span>
      </div>

      {/* Card principal */}
      <div className="login-card fade-in-down">

        {/* Topo decorativo */}
        <div className="login-card-top">
          <div className="login-icon">📖</div>
          <span className="login-badge">✨ Bem-vinda de volta ✨</span>
        </div>

        <h1 className="login-title">
          Entre no seu <em>cantinho</em> de leitura
        </h1>
        <p className="login-subtitle">
          Suas histórias favoritas estão te esperando 🌷
        </p>

        <form className="login-form" onSubmit={loginUser}>

          {/* Campo nome */}
          <div className={`input-group fade-in-up-1 ${focused === "name" ? "input-group--focused" : ""}`}>
            <label className="input-label" htmlFor="name">
              <span>🌸</span> Nome
            </label>
            <input
              id="name"
              type="text"
              className="input-field"
              placeholder="Como te chamam?"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused("")}
              required
            />
          </div>

          {/* Campo senha */}
          <div className={`input-group fade-in-up-2 ${focused === "password" ? "input-group--focused" : ""}`}>
            <label className="input-label" htmlFor="password">
              <span>🔑</span> Senha
            </label>
            <div className="input-wrapper">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="input-field"
                placeholder="Sua senha secreta..."
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                onFocus={() => setFocused("password")}
                onBlur={() => setFocused("")}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Mostrar/ocultar senha"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Esqueceu a senha */}
          <div className="login-forgot fade-in-up-3">
            <a href="#" className="forgot-link">Esqueceu a senha? 🌷</a>
          </div>

          {/* Botão entrar */}
          <button type="submit" className="btn-kawaii btn-primary btn-lg fade-in-up-4">
            <span>Entrar</span>
            <span className="sparkle">✨</span>
          </button>

        </form>

      </div>
    </div>
  );
}

export default LoginPage;