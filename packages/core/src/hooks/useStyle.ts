import { useContext } from "react";
import { StyleContext } from "../contexts/StyleContext"

const useStyle = () => {
  const style = useContext(StyleContext)
  return { ...style }
}

export { useStyle }