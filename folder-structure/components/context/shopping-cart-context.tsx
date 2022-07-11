import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react';

const ShoppingCartContext = createContext<{
  items: Record<any, any>;
  setItems: Dispatch<SetStateAction<Record<any, any>>>;
}>({
  items: {},
  setItems: () => null,
});

export const ShoppingCartProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [items, setItems] = useState<Record<any, any>>({});

  return (
    <ShoppingCartContext.Provider value={{ items, setItems }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContext;
