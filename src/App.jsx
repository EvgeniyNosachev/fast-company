import React, { useEffect, useState } from "react";
import api from "./api";

import UsersList from "./components/UsersList.jsx";

const App = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);
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
            <UsersList
                users={users}
                handleToggleBookMark={handleToggleBookMark}
                handleDelete={handleDelete}
            />
        </div>
    );
};

export default App;
