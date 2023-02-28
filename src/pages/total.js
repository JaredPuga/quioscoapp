import { useCallback, useEffect } from "react";
import { useQuiosco } from "hooks/useQuiosco";
import { Layout } from "layout/layout";
import { formatearDinero } from "helpers";


export default function Total(){

  const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco()

  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === '' || nombre.length < 3
  }, [pedido, nombre])

  useEffect(() => {
    comprobarPedido()
  }, [pedido, comprobarPedido])
  
  return (
    <Layout pagina='Total y Confirmar Pedido'>
        <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
        <p className="text-2xl my-10">Confirma tu pedido a continuación</p>

        <form onSubmit={colocarOrden}>
          <div>
            <label className="lbl block uppercase text-slate-800 font-bold text-xl" htmlFor="nombre">Nombre</label>
            <input 
              type='text'
              className="inpt bg-gray-100 w-full"
              id="nombre"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />
            <style jsx>{`
              .inpt {
                background-color: rgb(243 244 246 / var(--tw-bg-opacity));
                margin-top: 0.75rem;
                padding: 0.5rem;
                border-radius: 6px
              }

              .lbl {
                display: block
              }

              @media (min-width: 1024px) {
                  .inpt {
                    width: 33.3333%;
                  }
              }
            `}</style>
          </div>

          <div className="mt-10">
            <p className="text-2xl">Total a pagar: {''} <span className="font-bold">{formatearDinero(total)}</span></p>
          </div>

          <div className="mt-5">
            <input 
              type='submit'
              className= {`${comprobarPedido() ? 'inpt2' : 'inpt3 hover:bg-indigo-800 hover:cursor-pointer'} w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center `}
              value='Confirmar pedido'
              disabled={comprobarPedido()}
            />

            <style jsx>{`
              .inpt2 {
                background-color: rgb(55 65 81 / 0.2);
              }

              .inpt3 {
                background-color: rgb(79 70 229 / 1);
              }

              .inpt3:hover {
                background-color: rgb(55 48 163 / 1);
              }

              @media (min-width: 1024px) {
                .inpt3 {
                    width: auto;
                }
              }
            `}</style>
          </div>
        </form>
    </Layout>
  )
}
