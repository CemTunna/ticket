import { Navigate, Outlet } from 'react-router-dom';
import useAuthStatus from '../hooks/useAuthStatus';
import Loader from './ui/Loader';
const PrivateRoute = () => {
  const { loggedIn, checking } = useAuthStatus();
  if (checking) {
    return <Loader />;
  }
  return loggedIn ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;
