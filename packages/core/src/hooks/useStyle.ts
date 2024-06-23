import { useContext } from "react";
import { StyleContext } from "../Contexts/StyleContext"

export const useStyle = () => {
  return useContext(StyleContext)
}
