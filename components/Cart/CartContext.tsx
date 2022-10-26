import {createContext, ReactNode, useContext, useEffect, useState} from "react";

interface CartItem {
  id: number;
  price: number;
  title: string;
  count: number;
}

interface CartState {
  items: CartItem[];
  addItemToCard: (item: CartItem) => void;
  removeItemFromCard: (id: CartItem["id"]) => void;
}

export const CartStateContext = createContext<CartState | null>(null);

const getCartItemsFromStorage = () => {
  const itemsFromLocalStorage = localStorage.getItem("AAQU_SOPPING_CART");
  console.log(itemsFromLocalStorage)
  if (!itemsFromLocalStorage) {
    return [];
  }
  try {
    return JSON.parse(itemsFromLocalStorage);
  } catch (err) {
    console.error(err)
    return [];
  }
};

const setCartItemsInStorage = (cartItems: CartItem[]) => {
  localStorage.setItem("AAQU_SOPPING_CART", JSON.stringify(cartItems))
};

export const CartStateContextProvider = ({children}: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setCartItems(getCartItemsFromStorage())
  }, [])

  useEffect(() => {
    setCartItemsInStorage(cartItems);
  }, [cartItems])

  return (
    <CartStateContext.Provider
      value={{
        items: cartItems,
        addItemToCard: (item) => {
          setCartItems((prevState) => {
            const existingItem = prevState.find(existingItem => existingItem.id === item.id);
            if (!existingItem) {
              return [...prevState, item];
            }

            return prevState.map(currentItem => {
              if (currentItem.id === item.id) {
                return {
                  ...currentItem,
                  count: currentItem.count + 1
                }
              }
              return currentItem
            })
          })
        },
        removeItemFromCard: (id) => {
          setCartItems((prevState) => {
            const existingItem = prevState.find((existingItem) => existingItem.id === id);
            if (existingItem && existingItem.count <= 1) {
              return prevState.filter((item) => item.id !== id);
            }

            return prevState.map((currentItem) => {
              if (currentItem.id === id) {
                return {
                  ...currentItem,
                  count: currentItem.count - 1
                }
              }
              return currentItem
            })
          })
        }
      }}
    >
      {children}
    </CartStateContext.Provider>
  )
};

export const useCartState = () => {
  const cartState = useContext(CartStateContext);
  if (!cartState) {
    throw new Error('You forgot CartStateContextProvider!')
  }
  return cartState;
}
