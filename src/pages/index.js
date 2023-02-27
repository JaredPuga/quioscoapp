import { CategoriaProductos } from "components/categoriaProductos";
import { Titulo } from "components/titulo";
import { useQuiosco } from "hooks/useQuiosco";
import { Layout } from "layout/layout";

export default function Home() {

  const { categoriaActual } = useQuiosco()

  return (
    <Layout pagina={`Menú ${categoriaActual?.nombre}`}>
      <Titulo 
        categoriaActual={categoriaActual}
      />

      <CategoriaProductos 
        categoriaActual={categoriaActual}
      />
    </Layout>
  )
}
