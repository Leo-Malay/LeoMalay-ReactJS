import { Switch, Route } from "react-router-dom";
import Client from "../Client";
import Dashboard from "../Dashboard";
import Index from "../Index";
import Merchant from "../Merchant";
import Gateway from "../Gateway";
const PayRoute = () => {
    return (
        <Switch className="PayRoute">
            <Route exact path="/Pay/Client" component={Client} />
            <Route exact path="/Pay" component={Dashboard} />
            <Route exact path="/Pay/Index" component={Index} />
            <Route exact path="/Pay/Merchant" component={Merchant} />
            <Route
                exact
                path="/Pay/Gateway/:clientToken/:merchantToken"
                component={Gateway}
            />
        </Switch>
    );
};

export default PayRoute;
