import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface CartContextValues {
  state: CartItems;
  setState: Dispatch<SetStateAction<CartItems>>;
}

type CartItems = Record<string, number>;

export const CartContext = createContext<CartContextValues>({
  state: {},
  setState: () => null,
});

export const CartContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [state, setState] = useState<CartItems>({});

  console.log({ state });
  return (
    <CartContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const { state, setState } = useContext(CartContext);

  const addItemToCart = (productId: string, quantity: number) => {
    console.log({
      productId,
      quantity,
    });

    console.log({ setState });
    setState((prev) => {
      const newState = {
        ...prev,
        [productId]: quantity,
      };

      console.log({ newState });
      return {
        ...prev,
        [productId]: quantity,
      };
    });

    console.log("after")
  };

  return {
    cartItems: state,
    addItemToCart,
  };
};
