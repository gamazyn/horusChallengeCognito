import React, { useState, useContext } from 'react';
import { AccountContext } from './Auth';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { authenticate } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();

    authenticate(email, password)
      .then((data) => {
        console.log('Login bem sucedido.', data);
      })
      .catch((err) => {
        console.error('Falha ao fazer login.', err);
      });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={email} onChange={(event) => setEmail(event.target.value)} />

        <input value={password} onChange={(event) => setPassword(event.target.value)} />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};
