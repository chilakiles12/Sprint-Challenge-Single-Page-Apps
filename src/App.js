import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import AppRouter from './components/AppRouter';
import SearchForm from './components/SearchForm';

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <TabNav />
        <SearchForm />
        <AppRouter />
      </main>
    </BrowserRouter>
  );
}
