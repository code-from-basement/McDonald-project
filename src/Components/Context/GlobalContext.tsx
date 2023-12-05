import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

interface globalContextProps {
  children: React.ReactNode;
}

function GlobalContextProvider({ children }: globalContextProps) {
  /*Mega menu functions  */
  const [megaMenuOpen, setMegaMenuOpen] = useState<boolean>(false);
  const megaMenuToggler = () => {
    console.log("click");
    setMegaMenuOpen(!megaMenuOpen);
  };
  //----------------------/

  return (
    <GlobalContext.Provider
      value={{
        megaMenuOpen,
        setMegaMenuOpen,
        megaMenuToggler,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

function useGlobalContext() {
  const context = useContext(GlobalContext);
  return context;
}

export { GlobalContextProvider, useGlobalContext };
