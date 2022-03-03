import React from "react";
import { Switch, Route } from "react-router-dom";
import Index from "../Index";
import Cart from "../Cart";
import Product from "../Product";
import Store from "../Store";
import Order from "../Order";
import Pay from "../Pay";
import VendorDashboard from "../vendor/Dashboard";
import VendorProduct from "../vendor/Product";
import VendorOrder from "../vendor/Order";
// Importing the CSS.
import "../css/Cart.css";
import "../css/CartItem.css";
import "../css/Index.css";
import "../css/Order.css";
import "../css/OrderCard.css";
import "../css/Product.css";
import "../css/ProductCard.css";
import "../css/VendorDashboard.css";
const StoreRoute = () => {
    return (
        <Switch className="StoreRoute">
            <Route exact path="/Store/Index" component={Index} />
            <Route exact path="/Store" component={Store} />
            <Route exact path="/Store/Product/:id" component={Product} />
            <Route path="/Store/Cart" component={Cart} />
            <Route path="/Store/Order" component={Order} />
            <Route path="/Store/Pay" component={Pay} />
            {/* Vendor Page */}
            <Route path="/Store/Vendor/Dashboard" component={VendorDashboard} />
            <Route path="/Store/Vendor/Product" component={VendorProduct} />
            <Route path="/Store/Vendor/Order" component={VendorOrder} />
        </Switch>
    );
};

export default StoreRoute;
