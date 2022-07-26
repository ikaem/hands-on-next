import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import graphql from '../lib/graphql';
import { GET_ALL_PRODUCTS } from '../lib/graphql/queries/get-all-products';

interface ProductImage {
  id: string;
  url: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  images: ProductImage[];
}

type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>;

const HomePage: NextPage<HomePageProps> = ({ products }) => {
  return <div>Karlo</div>;
};

export const getStaticProps: GetStaticProps<{
  products: Product[];
}> = async () => {
  const { products } = await graphql.request<{ products: Product[] }>(
    GET_ALL_PRODUCTS
  );

  return {
    props: {
      products,
    },
    revalidate: 60
  };
};

export default HomePage;


