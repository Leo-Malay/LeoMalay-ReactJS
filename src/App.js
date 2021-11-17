import { BrowserRouter, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
/** Importing General CSS */
import "./css/App.css";
import "./css/Color.css";
import "./css/FontSize.css";
import "react-toastify/dist/ReactToastify.css";
/** Importing Routes */
import AuthRoute from "./views/products/auth/route/AuthRoute";
import BlogRoute from "./views/products/blog/route/BlogRoute";
import CafeteriaRoute from "./views/products/cafeteria/route/CafeteriaRoute";
import StoreRoute from "./views/products/store/route/StoreRoute";
import SocialRoute from "./views/products/social/route/SocialRoute";
import InventoryRoute from "./views/services/inventory/route/InventoryRoute";
import PayRoute from "./views/services/pay/route/PayRoute";
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
            {/* Toast Notifier */}
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
            />
        </BrowserRouter>
    );
};
export default App;
