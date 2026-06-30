import React from 'react'
import "./Button.css"

export default function Button({children, onClick, className}) {
  return (
    <div>
        <button className={className} onClick={onClick}>{children}</button>
    </div>
  )
}
