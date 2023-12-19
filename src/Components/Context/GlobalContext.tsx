import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

interface globalContextProps {
  children: React.ReactNode;
  eventToggles: {
    toggleFunc: () => void;
    isBasketShow: boolean;
    megaMenuOpen: boolean;
    isBasketEmpty: boolean;
  };
}

function GlobalContextProvider({ children }: globalContextProps) {
  const [isLoading, setIsLoading] = useState(false);

  //**Event State Management *///////////////////////////
  const [eventToggles, setEventToggles] = useState({
    togglerFunc: (key: any, value: any) => {
      setEventToggles((prevData) => {
        return { ...prevData, [key]: value };
      });
    },
    isBasketShow: false,
    megaMenuOpen: false,
    isBasketEmpty: true,
  });
  //----------------------------------------------------//

  //*Fetch from firebase real time
  const [fullMenuListData, setFullMenuListData] = useState();
  const [menuLists, setMenuLists] = useState({
    hamburger: [],
    chickenAndFish: [],
  });

  const fetchAllMenuData = async (address: string) => {
    try {
      setIsLoading(true);
      const res = await fetch(`https://fir-1-c7f12-default-rtdb.asia-southeast1.firebasedatabase.app/${address}.json`);
      const data = await res.json();
      setFullMenuListData(data);
      console.log(data);
    } catch (error) {
      setIsLoading(false);
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(fullMenuListData);

  //*----------------------------------------------------//

  useEffect(() => {
    if (fullMenuListData) {
      const getHamburgerMenuList = fullMenuListData.filter((item: any) => item.category == "hamburger");
      const getChickenAndFishMenuList = fullMenuListData.filter((item: any) => item.category == "chicken&fish");
      setMenuLists({ hamburger: getHamburgerMenuList, chickenAndFish: getChickenAndFishMenuList });
    }
  }, [fullMenuListData]);

  console.log(menuLists);

  return (
    <GlobalContext.Provider
      value={{
        eventToggles,
        isLoading,
        fullMenuListData,
        setEventToggles,
        fetchAllMenuData,
        setIsLoading,
        setFullMenuListData,
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
