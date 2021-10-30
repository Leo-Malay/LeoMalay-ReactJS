import { Switch, Route } from "react-router-dom";
import Login from "../views/products/auth/Login";
import Account from "../views/products/auth/Account";
import NewAccount from "../views/products/auth/NewAccount";
import UpdatePassword from "../views/products/auth/UpdatePassword";
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
