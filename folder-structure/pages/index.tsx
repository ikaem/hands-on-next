import { Button, useColorMode, VStack } from '@chakra-ui/react';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// import Button from '../components/atoms/button/button';
// import styles from '../styles/Home.module.css';

export default function Home({ users }) {
  // console.log({ users });

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      {/* <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`} passHref>
              <a className="button"> {user.username} </a>
            </Link>
          </li>
        ))}

        <li>
          <Link href={`/users/${404}`} passHref>
            <a> 404 </a>
          </Link>
        </li>
      </ul> */}
      {/* <Button className="button-default">Alright</Button> */}
      <VStack padding={10}>
        <Button onClick={toggleColorMode} backgroundColor={'brand.100'}>
          Brand 100
        </Button>
        <Button backgroundColor={'brand.200'}>Brand 200</Button>
        <Button backgroundColor={'brand.300'}>Brand 300</Button>
        <Button backgroundColor={'brand.400'}>Brand 400</Button>
      </VStack>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axios.get('https://swapi.dev/api/people');
  // console.log({response: response.data.results})
  const users = response.data.results.map((p, i: number) => {
    return {
      id: i + 1,
      username: p.name,
    };
  });

  console.log({ users });

  return {
    props: {
      users: users,
    },
  };
};
