import React, { useState } from 'react';
import API from './api/index.js';
import SearchStatus from './components/SearchStatus';
import UsersList from './components/UsersList.jsx';

const App = () => {
  const [users, setUsers] = useState(API.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };
  const handleToggleBookMark = (id) => {
    setUsers(
      users.map((user) =>
        user._id === id ? { ...user, bookmark: !user.bookmark } : user
      )
    );
  };
  return (
    <div>
      <SearchStatus length={users.length} />
      <UsersList
        users={users}
        handleToggleBookMark={handleToggleBookMark}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
