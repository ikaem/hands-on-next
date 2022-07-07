import axios from 'axios';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function UserPage({ user }) {
  // console.log({ user });
  return (
    <div>
      <div>
        <Link href='/' passHref>
          Back to home
        </Link>
      </div>
      <hr />
      <div style={{ display: 'flex' }}>
        <img
          src={user.profile_picture}
          alt={user.username}
          width={150}
          height={150}
        />
        <div>
          <div>
            <b>Username:</b> {user.username}
          </div>

          <div>
            <b>Full name:</b>
            {user.first_name} {user.last_name}
          </div>
          <div>
            <b>Email:</b> {user.email}
          </div>
          <div>
            <b>Company:</b> {user.company}
          </div>
          <div>
            <b>Job title:</b> {user.job_title}
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;

  try {
    // const response = await axios.get(`https://swapi.dev/api/people/${id}`);
    const response = await axios.get(`https://swapi.dev/api/people/${id}`, {
      headers: {
        // has no effect here
        authorization: process.env.API_TOKEN,
      },
    });
    // console.log({ response: response.data });

    // console.log({ response: response.status });
    const user = {
      profile_picture: 'https://i.pravatar.cc/300',
      username: response.data.name,
      first_name: response.data.hair_color,
      last_name: response.data.skin_color,
      email: response.data.birth_year,
      company: response.data.homeworld,
      job_title: response.data.gender,
    };

    return {
      props: {
        user,
      },
    };
  } catch (e) {
    console.log('e', e);
    return {
      notFound: true
    }
  }
};
