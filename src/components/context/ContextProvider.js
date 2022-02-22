import { createContext } from "react";

const SetContext = createContext({});

export const ContextProvider = ({ children }) => {
  return <SetContext.Provider>{children}</SetContext.Provider>;
};

export default SetContext;
