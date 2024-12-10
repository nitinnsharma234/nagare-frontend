import React, { ReactNode, useEffect, useReducer } from 'react';
import { ActionMap, AuthState, AuthUser } from '../common/interfaces/auth';
import apiClient from '../api_service/api.client';
import AuthApi from '../api_service/auth.api';
import { generateAuthUser, isValidToken, setSession } from '../utils/jwt';
import axios from 'axios';
import toast from 'react-hot-toast';

//=========================ENUMS==============

enum Types {
  Initial = 'INITIALIZE',
  Login = 'LOGIN',
  Logout = 'LOGOUT',
  Register = 'REGISTER',
}

type JWTAuthPayload = {
  [Types.Initial]: {
    isAuthenticated: boolean;
    user: AuthUser;
  };
  [Types.Login]: {
    user: AuthUser;
  };
  [Types.Logout]: undefined;
  [Types.Register]: {
    user: AuthUser;
  };
};

export type JWTActions =
  ActionMap<JWTAuthPayload>[keyof ActionMap<JWTAuthPayload>];

///=====Initial value  =================

const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

///======JWT Reducer function =========================

const JWTReducer = (state: AuthState, action: JWTActions) => {
  switch (action.type) {
    case 'INITIALIZE':
      return {
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
        user: action.payload.user,
      };
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case 'REGISTER':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

export type JWTContextType = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: AuthUser;
  method: 'jwt';
  login: (token: string) => Promise<void>;
  register: (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => Promise<void>;
  logout: () => Promise<void>;
};

//======Create context ===========================

const AuthContext = React.createContext<JWTContextType | null>(null);

//=======AuthproviderProps =================

type AuthproviderProps = {
  children: ReactNode;
};

//============Auth provider===================

function AuthProvider({ children }: AuthproviderProps) {
  const [state, dispatch] = useReducer(JWTReducer, initialState);

  //======initilised==============

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');

        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);

          const { data } = await apiClient.get(AuthApi.me);

          if (!data.data) {
            toast.error(data.message || 'Something went wrong');
            localStorage.clear();
          }

          //Auth user

          const user = generateAuthUser(data.data);

          dispatch({
            type: Types.Initial,
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          dispatch({
            type: Types.Initial,
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (error: any) {
        console.log('err', error);
        dispatch({
          type: Types.Initial,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  //=======Login==================
  const login = async (token: string) => {
    await setSession(token);
    const res = await apiClient.get(AuthApi.me);
    //@ts-ignore
    const user = generateAuthUser(res?.data?.data ? res?.data.data : res?.user);

    dispatch({
      type: Types.Login,
      payload: {
        user,
      },
    });
  };

  //=========Register============
  const register = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {
    const res = await axios.post('/auth/register', {
      email,
      password,
      firstName,
      lastName,
    });

    const { accessToken, user } = res.data;

    localStorage.setItem('accessToken', accessToken);
    dispatch({
      type: Types.Register,
      payload: {
        user,
      },
    });
  };

  //========logout=============
  const logout = async () => {
    setSession(null);
    dispatch({ type: Types.Logout });
  };

  return (
    <AuthContext.Provider
      value={{ ...state, method: 'jwt', login, logout, register }}
    >
      <>{children}</>
    </AuthContext.Provider>
  );
}
export { AuthContext, AuthProvider };
