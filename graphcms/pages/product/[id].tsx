import {
  Flex,
  Box,
  Divider,
  Grid,
  Button,
  Text,
  Image,
  Select,
} from '@chakra-ui/react';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { useState } from 'react';
import { Product } from '..';
import { useCartContext } from '../../contexts/cart-context';
import { graphqlClient } from '../../lib/graphql';
import { GET_ALL_PRODUCTS } from '../../lib/graphql/queries/get-all-products';
import { GET_PRODUCT } from '../../lib/graphql/queries/get-product';

type ProductPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const { cartItems, addItemToCart } = useCartContext();

  const isAlreadyInCart = product.id in cartItems;
  console.log({ quantity });
  console.log({ cartItems });

  return (
    <Flex rounded='xl' boxShadow='2xl' w='full' p='16' bgColor='white'>
      <Image height='96' width='96' src={product.images[0].url} />
      <Box ml='12' width='container.xs'>
        <Text as='h1' fontSize='4xl' fontWeight='bold'>
          {product.name}
        </Text>
        <Text
          lineHeight='none'
          fontSize='xl'
          my='3'
          fontWeight='bold'
          textColor='blue.500'
        >
          €{product.price / 100}
        </Text>
        <Text maxW='96' textAlign='justify' fontSize='sm'>
          {product.description}
        </Text>
        <Divider my='6' />
        <Grid gridTemplateColumns='2fr 1fr' gap='5' alignItems='center'>
          <SelectQuantity
            onChange={(quantity: string) => setQuantity(parseInt(quantity))}
          />
          <Button
            colorScheme='blue'
            onClick={() => addItemToCart(product.id, quantity)}
          >
            {isAlreadyInCart ? 'Update' : 'Add to cart'}
          </Button>
        </Grid>
      </Box>
    </Flex>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { products } = await graphqlClient.request<{ products: Product[] }>(
    GET_ALL_PRODUCTS
  );

  const paths = products.map((p) => ({
    params: {
      id: p.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  product: null | Product;
}> = async ({ params }) => {
  const { id } = params;
  console.log({ params });
  const { product } = await graphqlClient.request<{ product: Product }>(
    GET_PRODUCT,
    { id }
  );

  // console.log({ data });

  // console.log({ products });

  // const product = products[0] ? products[0] : null;
  return {
    props: { product },
  };
};

export default ProductPage;

function SelectQuantity(props) {
  const quantity = [...Array.from({ length: 10 })];
  return (
    <Select
      placeholder='Quantity'
      onChange={(event) => props.onChange(event.target.value)}
    >
      {quantity.map((_, i) => (
        <option key={i + 1} value={i + 1}>
          {i + 1}
        </option>
      ))}
    </Select>
  );
}
