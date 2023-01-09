import React, { useState } from 'react';
import api from '../api';

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };
  const renderPhrase = (number) => {
    const numberUser = Number(number.toString().split(''));

    if (numberUser === 1) return 'человек тусанет с тобой сегодня';
    if (numberUser >= 2 && numberUser <= 4) {
      return 'человека тусанут с тобой сегодня';
    } else return 'человек тусанет с тобой сегодня';
  };
  return (
    <>
      <h3>
        <span
          className={'badge bg-' + (users.length > 0 ? 'primary' : 'danger')}
        >
          {users.length > 0
            ? `${users.length} ${renderPhrase(users.length)} `
            : 'Никто с тобой не тусанёт'}
        </span>
      </h3>

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
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>
                  {user.qualities.map((qualiti) => (
                    <span
                      className={'badge m-1 bg-' + qualiti.color}
                      key={qualiti.id}
                    >
                      {qualiti.name}
                    </span>
                  ))}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td>
                  <button
                    className={'btn btn-danger'}
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
