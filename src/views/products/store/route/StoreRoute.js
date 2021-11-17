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
            <Route path="/Store/Cart" component={Cart} />
            <Route path="/Store/Order" component={Order} />
            {/* Vendor Page */}
            <Route path="/Store/Vendor/Dashboard" component={VendorDashboard} />
            <Route path="/Store/Vendor/Product" component={VendorProduct} />
            <Route path="/Store/Vendor/Order" component={VendorOrder} />
        </Switch>
    );
};

export default StoreRoute;
