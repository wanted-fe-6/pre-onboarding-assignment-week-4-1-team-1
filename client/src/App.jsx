import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Auth from './pages/Auth';
import UsersList from './pages/Users/UsersList';
import UsersFilter from './pages/Users/UsersFilter';
import UsersSearch from './pages/Users/UsersSearch';
import Layout from './components/Layout';
import AccountList from './pages/Accounts/AccountList';

import UserDetails from './pages/UserDetail/UserDetails';

import { getToken } from './utils/token';
import AccountDetail from './pages/AccountDetail/AccountDetail';

function App() {
  const token = getToken();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={token ? <Layout /> : <Auth />}>
          <Route index element={<AccountList />} />
          <Route index path="/users" element={<UsersList />} />
          <Route path="accounts" element={<AccountList />} />
          <Route path="accounts/:id" element={<AccountDetail />} />
          <Route path="/users/userSetting" element={<UsersFilter />} />
          <Route path="/users/customers" element={<UsersSearch />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
