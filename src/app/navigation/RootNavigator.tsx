import React from 'react';

import { AuthNavigator } from './AuthNavigator';
import { MainNavigator } from './MainNavigator';
import { DrawerNavigator } from './DrawerNavigator';

import { useAuthStore } from '../modules/auth/store/auth.store';
import { Sidebar } from '../components/ui/Sidebar';

export function RootNavigator() {
  const authenticated = useAuthStore(
            state => state.authenticated,
        );

  return authenticated ?
    <>
        <Sidebar />
        <MainNavigator />
    </>
    : <AuthNavigator />;
}