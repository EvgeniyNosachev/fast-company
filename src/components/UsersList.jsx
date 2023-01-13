import React from 'react';
import User from './User';

const UsersList = ({ users, handleToggleBookMark, handleDelete }) => {
  return (
    <>
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качество</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col"> </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User
                key={user._id}
                {...user}
                handleToggleBookMark={handleToggleBookMark}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default UsersList;
