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

  // Basket Data Management
  const [basketList, setBasketList] = useState([
    {
      id: 1,
      title: "Big Mac",
      price: 69,
      image: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/regular/desktop/t-mcdonalds-Big-Mac.jpg",
      qty: 4,
    },
    {
      id: 2,
      title: "Double Big Mac",
      price: 89,
      image: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/regular/desktop/t-mcdonalds-Double-Big-Mac.jpg",
      qty: 1,
    },
    {
      id: 3,
      title: "Mac double cheese",
      price: 99,
      image: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/regular/desktop/t-mcdonalds-Big-Mac.jpg",
      qty: 1,
    },
  ]);

  const [receipt, setReceipt] = useState({
    total: 0,
    subTotal: 0,
    deliveryFees: 25,
    taxAndFees: 0,
  });

  //**Event State Management *///////////////////////////
  const [eventToggles, setEventToggles] = useState({
    togglerFunc: (key: any, value: any) => {
      setEventToggles((prevData) => {
        return { ...prevData, [key]: value };
      });
    },
    isBasketShow: false,
    megaMenuOpen: false,
    isBasketEmpty: false,
  });
  //----------------------------------------------------//

  //*Fetching data from Firebase Realtime Database

  const [fullMenuListData, setFullMenuListData] = useState<any>(null);
  const [megaMenuItemData, setMegaMenuItemData] = useState([]);

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
    if (address === "menu") {
      try {
        setIsLoading(true);
        const res = await fetch(`https://fir-1-c7f12-default-rtdb.asia-southeast1.firebasedatabase.app/${address}.json`);
        const data = await res.json();
        setFullMenuListData(data);
      } catch (error) {
        setIsLoading(false);
        alert(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    } else if (address === "megaMenuItem") {
      try {
        const res = await fetch(`https://fir-1-c7f12-default-rtdb.asia-southeast1.firebasedatabase.app/${address}.json`);
        const data = await res.json();
        setMegaMenuItemData(data);
      } catch (error) {
        setIsLoading(false);
        alert(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
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

  //----------------------------------------------------//

  return (
    <GlobalContext.Provider
      value={{
        eventToggles,
        isLoading,
        fullMenuListData,
        megaMenuItemData,
        menuLists,
        basketList,
        receipt,
        setEventToggles,
        fetchAllMenuData,
        setIsLoading,
        setFullMenuListData,
        setMegaMenuItemData,
        setBasketList,
        setReceipt,
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
