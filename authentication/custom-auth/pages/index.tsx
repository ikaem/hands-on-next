import { useRouter } from 'next/router';
import React, { FormEventHandler, useState } from 'react';
import { useAuth } from '../lib/hooks/auth/use-auth';
import { handleLogin } from '../services/client/authentication/handle-login';
import styles from '../styles/app.module.css';

const Home = () => {
  const [loginError, setLoginError] = useState(null);

  const router = useRouter();
  const { user, loggedIn, loading, error } = useAuth();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    //@ts-ignore
    const { email, password } = e.target.elements;

    setLoginError(null);
    try {
      await handleLogin(email.value, password.value);
      router.push('/protected-route');
    } catch (e) {
      setLoginError(e.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (loggedIn) {
    router.push('/protected-route');
    return null;
  }

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' />
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' />
        <button type='submit'>Login</button>
        {loginError && <div className={styles.formError}>{loginError} </div>}
      </form>
    </div>
  );
};

export default Home;
