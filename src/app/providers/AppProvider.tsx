import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryProvider } from './QueryProvider';

export function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryProvider>
      <NavigationContainer>
        {children}
      </NavigationContainer>
    </QueryProvider>
  );
}