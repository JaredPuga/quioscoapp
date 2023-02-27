import { Producto } from "./producto"

export const CategoriaProductos = ({categoriaActual}) => {
  return (
    <div className="grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {
          categoriaActual?.productos?.map(producto => (
            <Producto 
              key={producto.id}
              producto={producto}
            />
          ))
        }
      </div>
  )
}
