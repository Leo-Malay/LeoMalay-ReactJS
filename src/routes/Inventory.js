/** Inventory Service */
import { Switch, Route } from "react-router-dom";
import Dashboard from "../views/services/inventory/Dashboard";
import Billing from "../views/services/inventory/Billing";
import Stock from "../views/services/inventory/Stock";

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
