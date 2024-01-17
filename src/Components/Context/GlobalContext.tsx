import React, { createContext, useContext, useEffect, useState } from "react";

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

  //*Fetching data from Firebase Realtime Database

  const [fullMenuListData, setFullMenuListData] = useState<any>();

  const [menuLists, setMenuLists] = useState({
    hamburger: [],
    chickenAndFish: [],
    drinks: [],
    breakfast: [],
    snackAndSides: [],
    dessert: [],
    salad: [],
    dips: [],
  });

  const fetchAllMenuData = async (address: string) => {
    try {
      setIsLoading(true);
      const res = await fetch(`https://fir-1-c7f12-default-rtdb.asia-southeast1.firebasedatabase.app/${address}.json`);
      const data = await res.json();
      setFullMenuListData(data);
    } catch (error) {
      setIsLoading(false);
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  //----------------------------------------------------//

  //*Menu List Management
  useEffect(() => {
    if (fullMenuListData) {
      //hamburgers list
      const getHamburgerMenuList = (fullMenuListData as never[]).filter((item: any) => item.category == "hamburger");
      //chicken and fish list
      const getChickenAndFishMenuList = (fullMenuListData as never[]).filter((item: any) => item.category == "chicken&fish");
      //drink list
      const getDrinkMenuList = (fullMenuListData as never[]).filter((item: any) => item.category == "drink");
      //breakfast list
      const getBreakFastMenuList = (fullMenuListData as never[]).filter((item: any) => item.category == "breakfast");
      //snack and slides list
      const getSnackAndSidesMenuList = (fullMenuListData as never[]).filter((item: any) => item.category == "snack&slides");
      //dessert list
      const getDessertMenuList = (fullMenuListData as never[]).filter((item: any) => item.category == "dessert");
      //dips list
      const getDipsMenuList = (fullMenuListData as never[]).filter((item: any) => item.category == "dip");
      //salad list
      const getSaladsMenuList = (fullMenuListData as never[]).filter((item: any) => item.category == "salads");
      setMenuLists({
        hamburger: getHamburgerMenuList,
        chickenAndFish: getChickenAndFishMenuList,
        drinks: getDrinkMenuList,
        breakfast: getBreakFastMenuList,
        snackAndSides: getSnackAndSidesMenuList,
        dessert: getDessertMenuList,
        salad: getSaladsMenuList,
        dips: getDipsMenuList,
      });
    }
  }, [fullMenuListData]);
  console.log(menuLists);

  //----------------------------------------------------//

  //*Product Management
  const [showOverlays, setShowOverlays] = useState({
    showAddToOverlay: false,
    showQuantitySelector: false,
  });

  return (
    <GlobalContext.Provider
      value={{
        eventToggles,
        isLoading,
        fullMenuListData,
        menuLists,
        showOverlays,
        setEventToggles,
        fetchAllMenuData,
        setIsLoading,
        setFullMenuListData,
        setShowOverlays,
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
