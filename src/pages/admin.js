import useSWR from "swr";
import AdminLayout from "layout/adminLayout";
import axios from "axios";
import { Orden } from "components/orden";

export default function Admin() {

    const fetcher = () => axios('/api/ordenes').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenes',fetcher, { refreshInterval: 100 }) //refreshInterval está en milisegundos

    return (
        <AdminLayout pagina='Admin'>
            <h1 className="text-4xl font-black">Panel de administración</h1>
            <p className="text-2xl my-10">Administra las ordenes</p>

            {
                data && data.length ? data.map(orden => 
                    <Orden
                        key={orden.id}
                        orden={orden}
                    />
                    ) : <p>No hay ordenes pendientes</p> //Nos aseguramos de que data exista algo
            }

        </AdminLayout>
    )
}
