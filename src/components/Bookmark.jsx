import React from 'react';

const BookMark = ({ status, id, handleToggleBookMark }) => {
  return (
    <button onClick={() => handleToggleBookMark(id)}>
      <i className={'bi bi-bookmarks' + (status ? '-fill' : ' ')}></i>
    </button>
  );
};

export default BookMark;
