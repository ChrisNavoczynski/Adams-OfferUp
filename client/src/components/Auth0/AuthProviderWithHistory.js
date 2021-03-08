import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';

/* This portion is referenced from the following:
    https://auth0.com/blog/complete-guide-to-react-user-authentication/ */
const AuthProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH_0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH_0_CLIENT_ID;
  const audience = process.env.REACT_APP_AUTH_0_AUDIENCE;

  const history = useHistory();
  /* The use of the variable appState does not represent React state,
    and just the Auth0 provider */
  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience={audience}
    >

      {children}
    </Auth0Provider>
  );
};
export default AuthProviderWithHistory;
