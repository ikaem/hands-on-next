import { useCallback, useEffect, useState } from 'react';

export const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleGetSession = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch('/api/get-session');
      const data = await response.json();

      console.log({ data });

      if (data.loggedIn) {
        setLoggedIn(true);
        setUser(data.user);
      }
    } catch (e) {
      setError(e);
      console.log('error', e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    handleGetSession();
  }, [handleGetSession]);

  console.log({
    user,
    loggedIn,
    loading,
    error,
  });

  return {
    user,
    loggedIn,
    loading,
    error,
  };
};
