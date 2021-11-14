/** Inventory Service */
import { Switch, Route } from "react-router-dom";
import Dashboard from "../Dashboard";
import Billing from "../Billing";
import Stock from "../Stock";

const InventoryRoute = () => {
    return (
        <Switch className="InventoryRoute">
            <Route exact path="/Inventory" component={Dashboard} />;
            <Route exact path="/Inventory/Billing" component={Billing} />;
            <Route exact path="/Inventory/Stock" component={Stock} />;
        </Switch>
    );
};

export default InventoryRoute;
