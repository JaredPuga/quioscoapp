import { useQuiosco } from "hooks/useQuiosco"
import Image from "next/image"
import { Categoria } from "./categoria"


export const Sidebar = () => {

    const { categorias } = useQuiosco()

  return (
    <>
        <div className="flex justify-center mt-4">
            <Image 
                width={150}
                height={100}
                src='/assets/img/logo.svg'
                alt="Imagen logotipo"
            />
        </div>

        <nav className="mt-10">
            {
                categorias.map(categoria => (
                    <Categoria 
                        key={categoria.id}
                        categoria={categoria}
                    />
                ))
            }
        </nav>
    </>
  )
}
