import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, id, handleToggleBookMark }) => {
    return (
        <button onClick={() => handleToggleBookMark(id)}>
            <i className={"bi bi-bookmarks" + (status ? "-fill" : " ")}></i>
        </button>
    );
};
BookMark.propTypes = {
    status: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    handleToggleBookMark: PropTypes.func
};
export default BookMark;
