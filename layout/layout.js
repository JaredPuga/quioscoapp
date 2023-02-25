import { Sidebar } from "components/sidebar"
import Head from "next/head"

export const Layout = ({children,}) => {
  return (
    <>
        <Head>
            <title>Café - </title>
            <meta name="description" content="Quiosco - Cafetería " />
        </Head>

        <div className="md:flex">
            <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
                <Sidebar />
            </aside>

            <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                {children}
            </main>
        </div>
    </>
  )
}
