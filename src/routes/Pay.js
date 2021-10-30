import { Switch, Route } from "react-router-dom";
import Dashboard from "../views/services/pay/Dashboard";
import Merchant from "../views/services/pay/Merchant";
import Client from "../views/services/pay/Client";
const PayRoute = () => {
    return (
        <Switch className="PayRoute">
            <Route exact path="/Pay/Dashboard" component={Dashboard} />
            <Route exact path="/Pay/Merchant" component={Merchant} />
            <Route exact path="/Pay/Client" component={Client} />
        </Switch>
    );
};

export default PayRoute;
