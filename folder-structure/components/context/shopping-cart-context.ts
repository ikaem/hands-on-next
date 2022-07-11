import { createContext, PropsWithChildren } from 'react';

const ShoppingCartContext = createContext({
  items: {},
  setItems: () => null,
});

export const ShoppingCartProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <ShoppingCartContext.Provider value={}>{children}</ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContext;
