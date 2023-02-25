import { useContext } from "react"
import QuioscoContext from "context/quioscoProvider"

export const useQuiosco = () => {
  return useContext(QuioscoContext)
}
