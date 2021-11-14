import { Switch, Route } from "react-router-dom";
import Index from "../Index";
import Cart from "../Cart";
import Product from "../Product";
import Store from "../Store";
import Order from "../Order";
import VendorDashboard from "../vendor/Dashboard";
import VendorProduct from "../vendor/Product";
import VendorOrder from "../vendor/Order";
const StoreRoute = () => {
    return (
        <Switch className="StoreRoute">
            <Route exact path="/Store/Index" component={Index} />
            <Route exact path="/Store" component={Store} />
            <Route exact path="/Store/Product/:id" component={Product} />
            <Route exact path="/Store/Cart" component={Cart} />
            <Route exact path="/Store/Order" component={Order} />
            {/* Vendor Page */}
            <Route
                exact
                path="/Store/Vendor/Dashboard"
                component={VendorDashboard}
            />
            <Route
                exact
                path="/Store/Vendor/Product"
                component={VendorProduct}
            />
            <Route exact path="/Store/Vendor/Order" component={VendorOrder} />
        </Switch>
    );
};

export default StoreRoute;
