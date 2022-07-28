import { Box, Divider, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import React, { useState } from 'react';
import { useCartContext } from '../contexts/cart-context';

const Cart: NextPage = () => {
  const { cartItems } = useCartContext();

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
        <Text>The cart is empty</Text>
      </Box>
    </Box>
  );
};

export default Cart;
