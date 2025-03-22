import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { signIn, signOut, signUp } from '../services/firebase/auth';

export const useAuth = () => {
  const { currentUser, loading } = useContext(AuthContext);

  return {
    currentUser,
    loading,
    signIn,
    signOut,
    signUp,
    isAuthenticated: !!currentUser,
  };
};
