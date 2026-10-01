import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';

import './styles/global.css';
import { AppProvider } from './src/app/providers/AppProvider';
import { ToastProvider } from "./src/app/components/ui/ToastProvider";
import { RootNavigator } from './src/app/navigation/RootNavigator';
import { AuthStorage } from './src/app/storage/async-storage';
import { useAuthStore } from './src/app/modules/auth/store/auth.store';


export default function App() {
  const [initializing, setInitializing] = useState(true);
  const setAuth = useAuthStore(state => state.setAuth);

  useEffect(() => {
    AuthStorage.load()
      .then(session => {
        if (session) {
          setAuth(session.accessToken, session.refreshToken, session.user);
        }
      })
      .catch(() => {
        // Keychain read failed or the session is corrupted, fall through
        // to the logged-out state rather than hanging on the splash forever
      })
      .finally(() => setInitializing(false));
  }, []);



  return (
    <AppProvider>
        <StatusBar
          translucent
           backgroundColor="transparent"
           barStyle="light-content"
        />
        <ToastProvider>
        <RootNavigator />
        </ToastProvider>
    </AppProvider>
  );
}