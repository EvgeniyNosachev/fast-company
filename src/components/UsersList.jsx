import React, { useState } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import User from "./User";
import PropTypes from "prop-types";

const UsersList = ({ users, handleToggleBookMark, handleDelete }) => {
    const count = users.length;
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageIndex) => {
        console.log("page: ", pageIndex);
        setCurrentPage(pageIndex);
    };

    const userCrop = paginate(users, currentPage, pageSize);

    return (
        <>
            {count > 0 && (
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
                        {userCrop.map((user) => (
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

            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};
UsersList.propTypes = {
    users: PropTypes.array.isRequired,
    handleToggleBookMark: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
};
export default UsersList;
