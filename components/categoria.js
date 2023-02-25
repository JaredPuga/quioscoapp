import Image from "next/image"

export const Categoria = ({categoria}) => {

    const { nombre, icono, id} = categoria

  return (
    <div>
        <Image
            width={100}
            height={100}
            alt={'Imagen Icono'}
            src={`/assets/img/icono_${icono}.svg`}
        />
        
    </div>
  )
}
