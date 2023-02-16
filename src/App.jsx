import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navBar.jsx";
import NotFound from "./components/notFound.jsx";
import Login from "./layouts/login.jsx";
import Main from "./layouts/main.jsx";
import Users from "./layouts/users.jsx";

const App = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path={"/login"} component={Login} />
                <Route path={"/users/:userId?"} component={Users} />
                <Route exact path={"/"} component={Main} />
                <Route path={"/404"} component={NotFound} />
                <Redirect to={"/404"} component={NotFound} />
            </Switch>
        </div>
    );
};

export default App;
