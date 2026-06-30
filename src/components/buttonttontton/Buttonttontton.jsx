import React from 'react'
import './Buttonttontton.css'
export default function Buttonttontton({children,className,onClick}) {
  return (
  <button className={className} onClick={onClick}>{children}</button>
  )
}
