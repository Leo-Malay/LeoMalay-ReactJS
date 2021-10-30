import { Switch, Route } from "react-router-dom";
import Cart from "../views/products/store/Cart";
import Product from "../views/products/store/Product";
import Store from "../views/products/store/Store";
import Order from "../views/products/store/Order";
const StoreRoute = () => {
    return (
        <Switch className="StoreRoute">
            <Route exact path="/Store" component={Store} />
            <Route exact path="/Store/Product/:id" component={Product} />
            <Route exact path="/Store/Cart" component={Cart} />
            <Route exact path="/Store/Order" component={Order} />
        </Switch>
    );
};

export default StoreRoute;
