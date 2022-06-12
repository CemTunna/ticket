import { useEffect, useState } from 'react';
import { useAppSelector } from '../state/hooks';
const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checking, setChecking] = useState(true);
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
    setChecking(false);
  }, [user]);
  return {
    loggedIn,
    checking,
  };
};

export default useAuthStatus;
