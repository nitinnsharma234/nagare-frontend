import { jwtDecode } from 'jwt-decode';
import { PATH_AUTH } from '../routes/path';
import apiClient from '../api_service/api.client';

const isValidToken = (accessToken: string) => {
  if (!accessToken) {
    return false;
  }
  const decoded = jwtDecode<{ exp: number }>(accessToken);

  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

const handleTokenExpired = (exp: number) => {
  let expiredTimer;
  const currentTime = Date.now();
  const timeLeft = exp * 1000 - currentTime;
  clearTimeout(expiredTimer);

  expiredTimer = setTimeout(() => {
    alert('Login Session expired');

    localStorage.removeItem('accessToken');

    window.location.href = PATH_AUTH.login;
  }, timeLeft);
};

const setSession = (accessToken: string | null) => {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
    apiClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    //
    const { exp } = jwtDecode<{ exp: number }>(accessToken);
    handleTokenExpired(exp);
  } else {
    localStorage.removeItem('accessToken');
    delete apiClient.defaults.headers.common.Authorization;
  }
};

const generateAuthUser = (user: any) => {
  return {
    email: user.email || '',
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    role: user?.role || '',
    refreshToken: user?.refreshToken || '',
  };
};

export { isValidToken, setSession, generateAuthUser };
