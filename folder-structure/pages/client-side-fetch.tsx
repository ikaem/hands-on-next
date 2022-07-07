import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { GetServerSideProps } from 'next';

function List({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.username}`} passHref>
            <a> {user.username} </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ClientSideFetch({ envVariable, id }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  console.log({ envVariable });

  const getData = useCallback(async () => {
    // const req = await fetch('https://api.rwnjs.com/04/users');
    // const users = await req.json();

    const response = await axios.get('https://swapi.dev/api/people', {
      headers: {
        authorization: envVariable,
      },
    });
    // console.log({response: response.data.results})
    const users = response.data.results.map((p, i: number) => {
      return {
        id: i + 1,
        username: p.name,
      };
    });

    console.log({ users });
    setLoading(false);
    setData(users);
  }, [envVariable]);

  useEffect(() => {
    // getData();

    // fetch('https://swapi.dev/api/people', {
    fetch(`/api/single-person?id=${"3"}`, {
      // headers: {
      //   authorization: envVariable,
      // },
    })
      .then((data) => data.json())
      .then((data) => {
        console.log({ data });
        // const users = data.results.map((p, i: number) => {
        const users = data.map((p, i: number) => {
          return {
            id: i + 1,
            username: p.name,
          };
        });

        setLoading(false);
        // setData(users);
        setData(users);
      });
  }, [envVariable, getData]);

  return (
    <div>
      {loading && <div>Loading users...</div>}
      {data && <List users={data} />}
    </div>
  );
}
export default ClientSideFetch;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // const id = ctx.query.id;
  return {
    props: { envVariable: process.env.API_TOKEN, id: 3 },
  };
};
