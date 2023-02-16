import React from "react";
import { useParams } from "react-router-dom";
import User from "../components/userPage";
import UsersList from "../components/UsersList";

const Users = () => {
    const { userId } = useParams();
    return <>{userId ? <User userId={userId} /> : <UsersList />}</>;
};

export default Users;
