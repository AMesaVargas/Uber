import React from 'react';
import AppNavigator from './src/routes/appNavigator';
import { AuthProvider } from './src/context/authContext';
import { UserProvider } from './src/context/userContext';

const App = () => {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
};

export default App;