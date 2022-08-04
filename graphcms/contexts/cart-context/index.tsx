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

export type CartItems = Record<string, number>;

export const CartContext = createContext<CartContextValues>({
  state: {},
  setState: () => null,
});

export const CartContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [state, setState] = useState<CartItems>({});

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
    setState((prev) => {
      const newState = {
        ...prev,
        [productId]: quantity,
      };

      return {
        ...prev,
        [productId]: quantity,
      };
    });
  };

  return {
    cartItems: state,
    addItemToCart,
  };
};
