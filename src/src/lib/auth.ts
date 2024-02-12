import Cookies from 'js-cookie';

export const useAuth = () => {
  const sessionId = Cookies.get('sessionId');
  if (sessionId) {
    return true;
  }
  return false;
};
