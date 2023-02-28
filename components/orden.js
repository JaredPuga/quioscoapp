import Image from "next/image";
import axios from "axios";
import { formatearDinero } from "helpers";
import { toast } from "react-toastify";

export const Orden = ({orden}) => {

    const { id, nombre, fecha, total, pedido } = orden
    
    const completarOrden = async() => {
        try {
            await axios.post(`/api/ordenes/${id}`) // Retorno data si quiero guardar los que ya están hechos
            toast.success('Orden Lista')
        } catch (error) {
            toast.error('Hubo un error')
        }

    }

    console.log(pedido);
  return (
    <div className="border p-10 space-y-5">
        <h3 className="text-2xl font-bold">Orden { id }</h3>
        <p className="text-lg font-bold">Cliente: { nombre }</p>

        <div >
            {
                pedido.map(platillo => (
                    <div key={platillo.id} className='py-3 flex border-b last-of-type:border-0 items-center'>
                        <div className="w-32">
                            <Image 
                                width={400}
                                height={500}
                                alt={`Imagen platillo ${platillo.nombre}`}
                                src={`/assets/img/${platillo.imagen}.jpg`}
                            />
                        </div>

                        <div className="p-5 space-y-2">
                            <h4 className="text-xl font-bold text-amber-500">{ platillo.nombre }</h4>
                            <p className="text-lg font-bold">Cantidad: { platillo.cantidad }</p>
                        </div>
                    </div>
                ))
            }
        </div>

        <div className="md:flex md:items-center md:justify-between my-10">
            <p className="mt-5 font-black text-4xl text-amber-500">Total a pagar: {formatearDinero(total)}</p>
            <button 
                className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 md:mt-5 py-3 px-10 uppercase font-bold rounded-lg"
                type="button"
                onClick={completarOrden}
            >
                Completar Orden
            </button>
        </div>
    </div>
  )
}
