import React from "react";
import BookMark from "./Bookmark";
import Qualities from "./Qualities";
import PropTypes from "prop-types";
const User = ({
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    bookmark,
    _id,
    handleToggleBookMark,
    handleDelete
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
                <button
                    className={"btn btn-danger"}
                    onClick={() => handleDelete(_id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};
User.propTypes = {
    name: PropTypes.string.isRequired,
    qualities: PropTypes.array.isRequired,
    profession: PropTypes.object.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    bookmark: PropTypes.bool.isRequired,
    _id: PropTypes.string.isRequired,
    handleToggleBookMark: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
};
export default User;
