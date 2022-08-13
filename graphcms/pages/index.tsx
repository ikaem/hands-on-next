import { Grid } from '@chakra-ui/react';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { ProductCard } from '../components/product-card';
import { graphqlClient } from '../lib/graphql';
import { GET_ALL_PRODUCTS } from '../lib/graphql/queries/get-all-products';

export interface ProductImage {
  id: string;
  url: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  images: ProductImage[];
  description?: string;
}

type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>;

const HomePage: NextPage<HomePageProps> = ({ products }) => {
  return (
    <Grid gridTemplateColumns={'repeat(4, 1fr'} gap='5'>
      {products.map((p) => (
        <ProductCard key={p.id} {...p} />
      ))}
    </Grid>
  );
};

export const getStaticProps: GetStaticProps<{
  products: Product[];
}> = async () => {
  const { products } = await graphqlClient.request<{ products: Product[] }>(
    GET_ALL_PRODUCTS
  );

  // const products = [];

  return {
    props: {
      products,
    },
    revalidate: 60,
  };
};

export default HomePage;
