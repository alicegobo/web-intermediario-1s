import React from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from 'react-redux';
import { toggleLogged } from '../../redux/slice/UserSlice';

function BtnKawaii({ children, variant = "primary", style = {}, onClick }) {
  const base = {
    display: "inline-flex", alignItems: "center", gap: 6,
    padding: "10px 24px", borderRadius: 50, fontFamily: "'Nunito', sans-serif",
    fontWeight: 800, fontSize: "0.88rem", cursor: "pointer", border: "none",
    transition: "transform 0.18s ease, box-shadow 0.18s ease, background 0.2s",
    letterSpacing: "0.02em", ...style,
  };
  const variants = {
    primary: { background: "linear-gradient(135deg, #E8829A, #c06080)", color: "white", boxShadow: "0 4px 18px rgba(232,130,154,0.38)" },
    secondary: { background: "transparent", color: "#E8829A", border: "2px solid #FFB6C1" },
    gold: { background: "linear-gradient(135deg, #D4AF37, #b8962a)", color: "white", boxShadow: "0 4px 18px rgba(212,175,55,0.38)"   },
  };
  return (
    <button
      style={{ ...base, ...variants[variant] }}
      onClick={onClick}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px) scale(1.04)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ""; }}
      onMouseDown={e => { e.currentTarget.style.transform = "scale(0.97)"; }}
      onMouseUp={e => { e.currentTarget.style.transform = ""; }}
    >
      {children}
    </button>
  );
}


export default function Navbar() {
  const isLogged = useSelector(state => state.user.isLogged);
  const name = useSelector(state => state.user.name);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deslogar = () => {
    dispatch(toggleLogged());
    navigate("/");
  }

  return (
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(255,255,255,0.88)", backdropFilter: "blur(14px)", borderBottom: "1.5px solid #FFE4E8", padding: "14px 40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", color: 'pink', letterSpacing: "0.04em", display: "flex", alignItems: "center", gap: 8 }}>
          📚 Leia<span style={{ color: 'yellow' }}>comigo</span>
        </div>
        <ul className="nav-links-mobile" style={{ display: "flex", gap: 28, listStyle: "none" }}>
          <NavLink className="nav-link" to='/'>Home</NavLink>
          <NavLink className="nav-link" to='/books'>Books</NavLink>
          <NavLink className="nav-link" to='/notes'>Notes</NavLink>
          <NavLink className="nav-link" to='/favorite'>Favoritos</NavLink>
        </ul>
        {isLogged ? (
          <div style={{display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{fontWeight: 600, color: "#E8829A" }}>Olá, {name}!</span>
            <BtnKawaii variant="secondary" onClick={deslogar}>✨ Sair</BtnKawaii>
          </div>
        ):<Link to="/login"><BtnKawaii variant="primary">✨ Entrar</BtnKawaii></Link>}

      </nav>
  )
}
