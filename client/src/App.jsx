import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Auth from './pages/Auth';
import Users from './pages/Users/Users';
import Layout from './components/Layout';

import UserDetails from './pages/UserDetail/UserDetails';

import { getToken } from './utils/token';

function App() {
  const token = getToken();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={token ? <Layout /> : <Auth />}>
          <Route path="accounts" element={<></>} />
          <Route path="/users/customers" element={<Users />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
