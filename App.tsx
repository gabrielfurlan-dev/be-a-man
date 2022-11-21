import { NativeBaseProvider } from 'native-base';
import React from 'react';
import Routes from './src/routes';

// type AuthResponse = {
//   params: {
//     access_token: string;
//   };
//   type: string;
// }

export default function App() {
  return (
    <NativeBaseProvider>
      <Routes/>
    </NativeBaseProvider>
  );
}