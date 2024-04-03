import React, { createContext, useContext, useEffect, useState } from "react";
import { dataBase } from "../../Data/firebaseConfig";

const GlobalContext = createContext();

interface globalContextProps {
  children: React.ReactNode;
  eventToggles: {
    toggleFunc: () => void;
    isBasketShow: boolean;
    megaMenuOpen: boolean;
    isBasketEmpty: boolean;
    stickyBasket: boolean;
    isModalRedirectionShow: boolean;
  };
}

function GlobalContextProvider({ children }: globalContextProps) {
  //*Fetching data from Firebase Realtime Database
  const [fullMenuListData, setFullMenuListData] = useState<any>(null);
  const [megaMenuItemData, setMegaMenuItemData] = useState([]);
  // **USER FAVORITE LIST IN BACKEND
  const [loggedInUserFavoriteList, setLoggedInUserFavoriteList] = useState([]);

  //**User Favorite List in front end *//////////////////////////////
  const [userFavoriteList, setUserFavoriteList] = useState([]);

  //**User State Management *///////////////////////////
  const [loggedUser, setLoggedUser] = useState({});

  // Loading State Management
  const [isLoading, setIsLoading] = useState(false);

  // Basket Data Management
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
  });

  // Updating User Favorite List in favorite page
  {
  }
  useEffect(() => {
    setUserFavoriteList(
      fullMenuListData?.filter((item) => {
        return item.isFavorite === true;
      })
    );
  }, [fullMenuListData]);

  //----------------------------------------------------//

  // Fetching Favorite List
  const fetchAllFavoriteList = async (usernameParams: string) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/v1/usersfavs/${usernameParams}`);
      const { data } = await response.json();
      const uniqueItemList = [...new Set(data.allFavItems.favoriteList)];
      setLoggedInUserFavoriteList(uniqueItemList);
      console.log("fav fecthed");
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAllMenuData = async (address: string) => {
    if (address === "menus") {
      try {
        setIsLoading(true);
        //
        const res = await fetch(`http://127.0.0.1:5000/api/v1/${address}`);
        const { data } = await res.json();
        const allMenus = await data.allMenus;
        setFullMenuListData(allMenus);

        // Favorite Process
        // if (loggedInUserFavoriteList) {
        //   console.log(loggedInUserFavoriteList);
        //   console.log("logic is working");
        //   const newAllMenus = allMenus.map((menu: any) => {
        //     loggedInUserFavoriteList.map((item: any) => {
        //       if (menu._id == item) {
        //         menu.isFavorite = true;
        //       }
        //     });
        //   });
        //   setFullMenuListData(newAllMenus);
        // } else {
        //   console.log("goooz");
        // }

        // loggedInUserFavoriteList?.map((item: any) => {
        //   const allMenusAfter = allMenus.map((menu: any) => {
        //     if (menu._id == item) {
        //       menu.isFavorite = true;
        //     } else {
        //       menu.isFavorite = false;
        //     }
        //   });
        //   console.log(allMenusAfter);

        // });
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
        loggedUser,
        userFavoriteList,
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
        fetchAllFavoriteList,
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
