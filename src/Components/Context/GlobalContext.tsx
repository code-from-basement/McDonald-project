import React, { createContext, useContext, useEffect, useRef, useState } from "react";

const GlobalContext = createContext<any>(null);

type globalContextProps = {
  children: React.ReactNode;
};

function GlobalContextProvider({ children }: globalContextProps) {
  const basketMenuRef = useRef(null);
  const megaMenuRef = useRef(null);

  //*Fetching data from Firebase Realtime Database
  const [fullMenuListData, setFullMenuListData] = useState<any>(null);

  const [megaMenuItemData, setMegaMenuItemData] = useState([]);
  // **USER FAVORITE LIST IN BACKEND
  const [loggedInUserFavoriteList, setLoggedInUserFavoriteList] = useState([]);

  //**User Favorite List in front end *//////////////////////////////
  const [userFavoriteList, setUserFavoriteList] = useState([]);

  //**User State Management *///////////////////////////
  const [loggedUser, setLoggedUser] = useState();

  //** */ Loading State Management
  const [isLoading, setIsLoading] = useState(false);

  //** */ Basket Data Management
  const [basketList, setBasketList] = useState([]);

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
    stickyBasket: false,
    isModalRedirectionShow: false,
    isIntroPageShow: true,
  });

  // **Updating User Favorite List in favorite page
  useEffect(() => {
    setUserFavoriteList(
      fullMenuListData?.filter((item: any) => {
        return item.isFavorite === true;
      })
    );
  }, [fullMenuListData]);

  const fetchAllMenuData = async (address: string) => {
    if (address === "menus") {
      try {
        setIsLoading(true);

        //
        const res = await fetch(`https://mac-server.onrender.com/api/v1/${address}`);
        const { data } = await res.json();
        const allMenus = await data.allMenus;

        if (loggedInUserFavoriteList.length > 0) {
          const newAllMenus = allMenus.map((menu: any) => {
            if (loggedInUserFavoriteList?.includes(menu._id as never)) {
              return { ...menu, isFavorite: true };
            }
            return menu;
          });
          setFullMenuListData(newAllMenus);
        } else {
          setFullMenuListData(allMenus);
        }
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
      const getSnackAndSidesMenuList = (fullMenuListData as never[]).filter((item: any) => item.category == "snacks");
      //dessert list
      const getDessertMenuList = (fullMenuListData as never[]).filter((item: any) => item.category == "dessert");
      //dips list
      const getDipsMenuList = (fullMenuListData as never[]).filter((item: any) => item.category == "dips");
      //salad list
      const getSaladsMenuList = (fullMenuListData as never[]).filter((item: any) => item.category == "salad");
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
        loggedUser,
        userFavoriteList,
        loggedInUserFavoriteList,
        basketMenuRef,
        megaMenuRef,
        setEventToggles,
        fetchAllMenuData,
        setIsLoading,
        setFullMenuListData,
        setMegaMenuItemData,
        setMenuLists,
        setBasketList,
        setReceipt,
        setLoggedUser,
        setUserFavoriteList,
        setLoggedInUserFavoriteList,
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
