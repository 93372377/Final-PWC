export const msalConfig = {
  auth: {
    clientId: 'YOUR_CLIENT_ID',
    authority: 'https://login.microsoftonline.com/YOUR_TENANT_ID', // YOUR tenant ID
    redirectUri: window.location.origin
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: true
  }
};

export const loginRequest = {
  scopes: ['User.Read'],
  prompt: 'login' // always ask for login
};
