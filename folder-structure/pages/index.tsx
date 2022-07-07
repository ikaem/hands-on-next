import axios from 'axios';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home({ users }) {
  console.log({ users });
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`} passHref>
            <a> {user.username} </a>
          </Link>
        </li>
      ))}

      <li>
        <Link href={`/users/${404}`} passHref>
          <a> 404 </a>
        </Link>
      </li>
    </ul>
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

  return {
    props: {
      users: users,
    },
  };
};
