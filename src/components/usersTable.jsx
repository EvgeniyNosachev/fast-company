import React from "react";
import PropTypes from "prop-types";

import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import BookMark from "./Bookmark";
import QualitiesList from "./qualitiesList";
import Table from "./table";

const UserTable = ({
    users,
    onSort,
    selectedSort,
    handleToggleBookMark,
    handleDelete
}) => {
    const columns = {
        name: { path: "name", name: "Имя" },
        qualities: {
            name: "Качества",
            component: (user) => <QualitiesList qualities={user.qualities} />
        },
        professions: { path: "profession.name", name: "Профессия" },
        completedMeetings: {
            path: "completedMeetings",
            name: "Встретился, раз"
        },
        rate: { path: "rate", name: "Оценка" },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
            component: (user) => (
                <BookMark
                    status={user.bookmark}
                    id={user._id}
                    handleToggleBookMark={handleToggleBookMark}
                />
            )
        },
        delete: {
            component: (user) => (
                <button
                    className={"btn btn-danger"}
                    onClick={() => handleDelete(user._id)}
                >
                    Delete
                </button>
            )
        }
    };
    return (
        <Table>
            <TableHeader {...{ onSort, selectedSort, columns }} />
            <TableBody {...{ columns, data: users }} />
        </Table>
    );
};

UserTable.propTypes = {
    onSort: PropTypes.func.isRequired,
    handleToggleBookMark: PropTypes.func,
    handleDelete: PropTypes.func.isRequired,
    users: PropTypes.array,
    selectedSort: PropTypes.object.isRequired
};

export default UserTable;
