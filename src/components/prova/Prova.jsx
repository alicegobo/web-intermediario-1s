import React from 'react'
import "./Prova.css"

function Prova({children}) {


  return (
       <button onClick={() => buscarSéries(busca)}>{children}</button>
  )
}

export default Prova