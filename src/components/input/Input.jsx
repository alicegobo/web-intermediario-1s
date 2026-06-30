import React, {useState} from 'react'
import "./Input.css";

export default function Input({placeholder="Pesquise aqui...",label = "Campo", type = "text", error = "", value, onChange, onKeyDown}) {

  return (
    <div className='input-container'>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} onKeyDown={onKeyDown} placeholder={placeholder} className={error ? "input-erro" : ""}  />
      {error && <span className='msg-erro'>{error}</span>}
    </div>
  )
}
