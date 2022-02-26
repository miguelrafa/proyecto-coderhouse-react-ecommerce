import React from 'react'
import Titulo from './Titulo'

const TituloPrincipal = () => {

    const text = "Productos"

  return (
    <>
    <div className="container-fluid tituloHeader">
    <Titulo tituloMain={text}></Titulo>
    </div>
    </>
  )
}

export default TituloPrincipal