import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('Auth context must required');

  return context;
};

export default useAuth;
