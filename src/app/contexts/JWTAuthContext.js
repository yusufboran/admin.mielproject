import React, { createContext, useEffect, useReducer } from "react";
import { MatxLoading } from "app/components";
import { firebaseLogin, firebaseLogout } from "../firabase";

const initialState = {
  isAuthenticated: false,
  isInitialised: false,
  user: null,
};

const setSession = (userData) => {
  if (userData) {
    localStorage.setItem("userData", JSON.stringify(userData));
  } else {
    localStorage.removeItem("userData");
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      const { isAuthenticated, user } = action.payload;

      return {
        ...state,
        isAuthenticated,
        isInitialised: true,
        user,
      };
    }
    case "LOGIN": {
      const { user } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        user,
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    }

    default: {
      return { ...state };
    }
  }
};

const AuthContext = createContext({
  ...initialState,
  method: "JWT",
  login: () => Promise.resolve(),
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = async (email, password) => {
    const userData = await firebaseLogin(email, password);
    const accessToken = userData.accessToken;
    const response = {
      accessToken,
      user: {
        id: 1,
        role: "SA",
        name: email,
        username: "jason_alexander",
        email: "jason@ui-lib.com",
        avatar: "/assets/images/face-6.jpg",
        age: 25,
      },
    };
    const { user } = response;

    setSession(response);

    dispatch({
      type: "LOGIN",
      payload: {
        user,
      },
    });
  };

  const logout = () => {
    setSession(null);
    dispatch({ type: "LOGOUT" });
    firebaseLogout();
  };

  useEffect(() => {
    (async () => {
      try {
        const userData = JSON.parse(window.localStorage.getItem("userData"));

        if (userData) {
          setSession(userData);
          const { user } = userData;
          dispatch({
            type: "INIT",
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          dispatch({
            type: "INIT",
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: "INIT",
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    })();
  }, []);

  if (!state.isInitialised) {
    return <MatxLoading />;
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "JWT",
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
