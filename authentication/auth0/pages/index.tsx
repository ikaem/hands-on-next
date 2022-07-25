import { useUser } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (!user) {
    return (
      <div className={styles.container}>
        <h1>Welcome stranger</h1>
        <p>
          Please <a href='/api/auth/login'>Login</a>
        </p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1>Welcome back</h1>

      <p>This is your email: {user.email}</p>
      <p>This is you: {user.name}</p>
    </div>
  );
}
