import { Switch, Route } from "react-router-dom";
import Dashboard from "../Dashboard";
import Merchant from "../Merchant";
import Client from "../Client";
import Index from "../Index";
const PayRoute = () => {
    return (
        <Switch className="PayRoute">
            <Route exact path="/Pay/Index" component={Index} />
            <Route exact path="/Pay" component={Dashboard} />
            <Route exact path="/Pay/Merchant" component={Merchant} />
            <Route exact path="/Pay/Client" component={Client} />
        </Switch>
    );
};

export default PayRoute;
