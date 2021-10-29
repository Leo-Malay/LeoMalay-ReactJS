import { Switch, Route } from "react-router-dom";
import Login from "../views/auth/Login";
import Account from "../views/auth/Account";
import NewAccount from "../views/auth/NewAccount";
import UpdatePassword from "../views/auth/UpdatePassword";
const AuthRoute = () => {
    return (
        <Switch className="AuthRoute">
            <Route exact path="/Auth/Login" component={Login} />
            <Route exact path="/Auth/Account" component={Account} />
            <Route exact path="/Auth/NewAccount" component={NewAccount} />
            <Route
                exact
                path="/Auth/UpdatePassword"
                component={UpdatePassword}
            />
        </Switch>
    );
};

export default AuthRoute;
