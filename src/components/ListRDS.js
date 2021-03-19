import React, { useState, useContext, useEffect } from 'react';
import rp from 'request-promise';

import { AccountContext } from './Auth';

export default () => {
  const [userList, setUserList] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const { getSession } = useContext(AccountContext);

  useEffect(() => {
    getSession().then(() => {
      setLoggedIn(true);
    });
  }, []);

  const fetchList = () => {
    getSession().then(async ({ headers }) => {
      const url = 'https://jk948at3yd.execute-api.sa-east-1.amazonaws.com/dev/users/auth-search';
      console.log(headers);
      const userList = await rp(url, { headers });
      setUserList(userList);
    });
  };

  return (
    <div>
      {loggedIn && (
        <>
          <div>
            <button onClick={fetchList}>Clique para carregar a lista de Usuários</button>
            <div>
              Lista de Usuários: <br /> {userList}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
