import { Box, Divider, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { Product } from '.';
import { CartItems, useCartContext } from '../contexts/cart-context';
import { graphqlClient } from '../lib/graphql';
import { GET_PRODUCT_BY_ID } from '../lib/graphql/queries/get-product-by-id';

const Cart: NextPage = () => {
  const { cartItems } = useCartContext();
  const [products, setProducts] = useState([]);

  const hasProducts = Object.keys(cartItems).length;

  console.log({ cartItems });
  console.log({ hasProducts });

  const totalPrice = getTotal(products, cartItems);

  console.log({ totalPrice });

  useEffect(() => {
    if (!hasProducts) return;
    graphqlClient
      .request(GET_PRODUCT_BY_ID, {
        ids: ['ckdu44mn40gxh010405uwgbtw'],
      })
      .then((data) => setProducts(data.products));
  }, [hasProducts]);

  return (
    <Box
      rounded={'xl'}
      boxShadow='2xl'
      w='container.lg'
      p='16'
      bgColor={'white'}
    >
      <Text as='h1' fontSize='2xl' fontWeight='bold'>
        Cart
      </Text>
      <Divider my='10' />
      <Box>
        <Text>The cart value is ${(totalPrice / 100).toFixed(2)}</Text>
      </Box>
    </Box>
  );
};

export default Cart;

function getTotal(products: Product[], cartItems: CartItems) {
  if (products.length === 0) return 0;

  const cartItemsCostMap: Record<
    string,
    {
      quantity: number;
      cost: number;
      id: string;
    }
  > = {};

  Object.keys(cartItems).forEach((key) => {
    cartItemsCostMap[key] = {
      quantity: cartItems[key],
      cost: 0,
      id: key,
    };
  });

  // now map trhough all products

  products.forEach((p) => {
    const cost = cartItems[p.id] * p.price;

    cartItemsCostMap[p.id] = {
      ...cartItemsCostMap[p.id],
      cost,
    };
  });

  const cartItemsCostArray = Object.keys(cartItemsCostMap).map((key) => {
    const item = cartItemsCostMap[key];

    return item;
  });

  const totalPrice = cartItemsCostArray.reduce((acc, current) => {
    return acc + current.cost;
  }, 0);

  return totalPrice;

  // TODO now go over items and find price in the proeuctrs
}
