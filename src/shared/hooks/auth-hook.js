import { useState, useCallback } from "react";


export const useCart = () => {
  const [shop, setShop] = useState();


  const buy = useCallback((shopping) => {
    
    setShop(shopping)
    console.log(shopping)
  }, []);
  return { buy, shop };
};
