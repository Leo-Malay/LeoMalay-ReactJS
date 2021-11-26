import { Switch, Route } from "react-router-dom";
import Index from "../Index";
import Login from "../Login";
import Account from "../Account";
import NewAccount from "../NewAccount";
import UpdatePassword from "../UpdatePassword";
import ForgotPassword from "../ForgotPassword";
import RemoveAccount from "../RemoveAccount";
// Generalized CSS
import "../css/Account.css";
import "../css/Index.css";
import "../css/Input.css";
const AuthRoute = () => {
    return (
        <div className="AuthRoute">
            <Switch>
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
                <Route
                    exact
                    path="/Auth/ForgotPassword"
                    component={ForgotPassword}
                />
                <Route
                    exact
                    path="/Auth/RemoveAccount"
                    component={RemoveAccount}
                />
            </Switch>
        </div>
    );
};

export default AuthRoute;
