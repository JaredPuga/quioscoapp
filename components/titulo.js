import React from 'react'

export const Titulo = ({categoriaActual}) => {
  return (
    <>
    <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
    <p className="text-2xl my-10">
      Elije y personaliza tu pedido a continuación
    </p>
    </>
  )
}
