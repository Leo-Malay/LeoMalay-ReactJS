import { Switch, Route } from "react-router-dom";
import Index from "../Index";
import Login from "../Login";
import Account from "../Account";
import NewAccount from "../NewAccount";
import UpdatePassword from "../UpdatePassword";
import RemoveAccount from "../RemoveAccount";
const AuthRoute = () => {
    return (
        <Switch className="AuthRoute">
            <Route exact path="/Auth/Index" component={Index} />
            <Route exact path="/Auth/Login/:redirect" component={Login} />
            <Route exact path="/Auth/Account" component={Account} />
            <Route
                exact
                path="/Auth/NewAccount/:redirect"
                component={NewAccount}
            />
            <Route
                exact
                path="/Auth/UpdatePassword"
                component={UpdatePassword}
            />
            <Route exact path="/Auth/RemoveAccount" component={RemoveAccount} />
        </Switch>
    );
};

export default AuthRoute;
