import React from 'react';
import Episode from './components/Episode';
import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import AppRouter from './components/AppRouter.js';

export default function App() {
  return (
    <main>
      <Header />
      <Episode />
      <TabNav />
      <AppRouter />
    </main>
  );
}
