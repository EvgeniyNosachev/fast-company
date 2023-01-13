import React from 'react';
import BookMark from './Bookmark';
import Qualities from './Qualities';

const User = ({
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  bookmark,
  _id,
  handleToggleBookMark,
  handleDelete,
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>
        {qualities.map((qualiti) => (
          <Qualities {...qualiti} key={qualiti._id} />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
      <td>
        <BookMark
          status={bookmark}
          id={_id}
          handleToggleBookMark={handleToggleBookMark}
        />
      </td>
      <td>
        <button className={'btn btn-danger'} onClick={() => handleDelete(_id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
