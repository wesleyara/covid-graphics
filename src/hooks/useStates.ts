import { useContext } from "react";
import { StateContext } from "../context/StateContext";

export function useStates() {
  const context = useContext(StateContext);

  const { states, setStates } = context;

  return { states, setStates };
}
