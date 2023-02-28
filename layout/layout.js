import Head from "next/head"
import { Sidebar } from "components/sidebar"
import Modal from "react-modal";
import { useQuiosco } from "hooks/useQuiosco";
import { ModalProducto } from "components/modalProducto";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css'
import { Pasos } from "components/pasos";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#__next');

export const Layout = ({children, pagina}) => {

    const { modal, producto } = useQuiosco()
    
  return (
    <>
        <Head>
            <title>Café - {pagina}</title>
            <meta name="description" content="Quiosco - Cafetería " />
        </Head>

        <div className="md:flex">
            <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 border-r-4 border-gray-900">
                <Sidebar />
            </aside>

            <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                <div className="p-10">
                    <Pasos />
                    {children}
                </div>
            </main>
        </div>

        {
            modal && (
                <Modal
                    isOpen={modal}
                    style={customStyles}
                >
                    <ModalProducto 
                        producto={producto}
                    />
                </Modal>
            )
        }

        <ToastContainer />
    </>
  )
}
