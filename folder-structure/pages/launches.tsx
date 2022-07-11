import { useQuery } from '@apollo/client';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { GET_LAUNCHES_PAST } from '../lib/grapqhl/queries/get-launches-past';
import styles from '../styles/Home.module.css';

export default function Launches() {
  // TODO this can now be fetched both on client side and backend side
  const { loading, data } = useQuery(GET_LAUNCHES_PAST, {
    fetchPolicy: 'no-cache',
  });

  console.log({ data });

  if (loading) return <h1>Loading</h1>;

  return (
    <ul>
      {data.launchesPast.map((l) => {
        return (
          <li key={l.id}>
            <h2>{l.mission_name}</h2>
            <p>{l.launch_date_local}</p>
          </li>
        );
      })}
    </ul>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const response = await axios.get('https://swapi.dev/api/people');
//   // console.log({response: response.data.results})
//   const users = response.data.results.map((p, i: number) => {
//     return {
//       id: i + 1,
//       username: p.name,
//     };
//   });

//   console.log({users})

//   return {
//     props: {
//       users: users,
//     },
//   };
// };
