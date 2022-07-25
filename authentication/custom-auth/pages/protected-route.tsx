import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useAuth } from '../lib/hooks/auth/use-auth';
import styles from '../styles/app.module.css';

const ProtectedPage: NextPage = () => {
  const router = useRouter();
  const { user, loggedIn, loading, error } = useAuth();


  // TODO not sure if this is ok for potentually not recongnizing omnfonite loops
  // if (!loading && !loggedIn) {
  //   router.push('/');
  // }
  return (
    <div className={styles.container}>
      {loading && <p>Loading...</p>}
      {error && <p> An error occurred. </p>}
      {loggedIn && (
        <>
          <h1>Protected Route</h1>
          <p>You cannot see me if not logged-in!</p>
        </>
      )}
    </div>
  );
};

export default ProtectedPage;
