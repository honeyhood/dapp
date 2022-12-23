import {
  React,
  createContext,
  useMemo,
  useState,
} from 'react';

const AuthenticationContext = createContext(
  {
    authentication: "",
    setAuthentication: () => {},
  },
);

function AuthenticationContextProvider(
  { children },
){
  const [authentication, setAuthentication] = useState("");

  const context = useMemo(() => ({
    authentication,
    setAuthentication,
  }), [authentication]);

  return (
    <AuthenticationContext.Provider value={context}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export { AuthenticationContext };

export default AuthenticationContextProvider;