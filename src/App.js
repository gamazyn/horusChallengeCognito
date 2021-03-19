import React from 'react';
import { Account } from './components/Auth';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Status from './components/Status';
import ListRDS from './components/ListRDS';

export default () => {
  return (
    <Account>
      <Status />
      <SignUp />
      <Login />
      <ListRDS />
    </Account>
  );
};
