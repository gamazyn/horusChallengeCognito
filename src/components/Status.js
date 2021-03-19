import React, { useState, useContext, useEffect } from 'react';
import { AccountContext } from './Auth';

export default () => {
  const [status, setStatus] = useState(false);

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((session) => {
      console.log('Session: ', session);
      setStatus(true);
    });
  }, []);

  return (
    <div>
      {status ? (
        <div>
          Você está logado.
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        'Por favor faça o login abaixo.'
      )}
    </div>
  );
};
