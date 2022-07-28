import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import React from 'react';
import { useCartContext } from '../../contexts/cart-context';

const Navbar: React.FC = () => {
  const { cartItems } = useCartContext();

  const itemsCount = Object.values(cartItems).reduce((acc, current) => {
    return acc + current;
  }, 0);

  return (
    <Box
      position='fixed'
      top={0}
      left={0}
      w='full'
      bgColor='white'
      boxShadow='md'
    >
      <Flex width='container.xl' m='auto' p='5' justifyContent='space-between'>
        <Link href='/' passHref>
          <Text textColor='blue.800' fontWeight='bold' fontSize='2xl' as='a'>
            My e-commerce
          </Text>
        </Link>
        <Box>
          <Link href='/cart' passHref>
            <Button as='a'>
              <Text mr='3'>{itemsCount}</Text>
              <ArrowRightIcon />
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
