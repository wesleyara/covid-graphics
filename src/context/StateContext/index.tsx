import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export const StateContext = createContext({} as StateContextProps);

interface StateContextProps {
  states: string;
  setStates: Dispatch<SetStateAction<string>>;
}

interface StateContextProviderProps {
  children: ReactNode;
}
export function StateContextProvider({ children }: StateContextProviderProps) {
  const [states, setStates] = useState("");

  return (
    <StateContext.Provider value={{ states, setStates }}>
      {children}
    </StateContext.Provider>
  );
}
