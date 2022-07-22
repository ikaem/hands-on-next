import { NextPage } from 'next';
import styles from '../styles/app.module.css';

const ProtectedPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Protected Route</h1>
      <p>You can&apos;t see me if not logged-in!</p>
    </div>
  );
};

export default ProtectedPage;
