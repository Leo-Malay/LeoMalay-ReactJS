import { Switch, Route } from "react-router-dom";
import Index from "../views/products/store/Index";
import Cart from "../views/products/store/Cart";
import Product from "../views/products/store/Product";
import Store from "../views/products/store/Store";
import Order from "../views/products/store/Order";
import VendorDashboard from "../views/products/store/vendor/Dashboard";
import VendorProduct from "../views/products/store/vendor/Product";
import VendorOrder from "../views/products/store/vendor/Order";
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
