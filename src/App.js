import { BrowserRouter, Route } from "react-router-dom";
/** Importing General CSS */
import "./css/App.css";
import "./css/Color.css";
import "./css/FontSize.css";
import "react-toastify/dist/ReactToastify.css";
/** Importing Routes */
import AuthRoute from "./views/products/auth";
import BlogRoute from "./views/products/blog";
import CafeteriaRoute from "./views/products/cafeteria";
import StoreRoute from "./views/products/store";
import SocialRoute from "./views/products/social";
import InventoryRoute from "./views/services/inventory";
import PayRoute from "./views/services/pay";
/** Importing Views */
import ServiceHome from "./views/services/ServiceHome";
import ProductHome from "./views/products/ProductHome";
/** Important Components */
import Home from "./views/Home";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { account } from "./views/products/auth/redux/authActions";
const App = () => {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => state.auth);
    useEffect(() => {
        dispatch(account());
    }, [isAuthenticated, dispatch]);
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/ProductHome" component={ProductHome} />
            <Route exact path="/ServiceHome" component={ServiceHome} />
            {/** Product Based */}
            <AuthRoute />
            <BlogRoute />
            <CafeteriaRoute />
            <StoreRoute />
            <SocialRoute />
            {/** Service Based */}
            <InventoryRoute />
            <PayRoute />
            {/** Footer */}
            <Footer />
        </BrowserRouter>
    );
};
export default App;
