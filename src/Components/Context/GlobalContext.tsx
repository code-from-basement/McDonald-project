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

  //*Fetch from firebase real time
  const [fullMenuListData, setFullMenuListData] = useState();

  const [menuLists, setMenuLists] = useState({
    hamburger: [],
    chickenAndFish: [],
    drinks: [],
    breakfast: [],
    snackAndSides: [],
    dessert: [],
    vegetarian: [],
    salad: [],
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
      //vegetarian list
      const getVegetarianMenuList = (fullMenuListData as never[]).filter((item: any) => item.category == "vegetarian");
      //salad list
      const getSaladsMenuList = (fullMenuListData as never[]).filter((item: any) => item.category == "salad");
      setMenuLists({
        hamburger: getHamburgerMenuList,
        chickenAndFish: getChickenAndFishMenuList,
        drinks: getDrinkMenuList,
        breakfast: getBreakFastMenuList,
        snackAndSides: getSnackAndSidesMenuList,
        dessert: getDessertMenuList,
        vegetarian: getVegetarianMenuList,
        salad: getSaladsMenuList,
      });
    }
  }, [fullMenuListData]);
  console.log(menuLists);

  return (
    <GlobalContext.Provider
      value={{
        eventToggles,
        isLoading,
        fullMenuListData,
        menuLists,
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
