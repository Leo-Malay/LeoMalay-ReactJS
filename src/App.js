import { BrowserRouter, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
/** Importing General CSS */
import "./css/App.css";
import "./css/Color.css";
import "./css/FontSize.css";
import "react-toastify/dist/ReactToastify.css";
/** Importing Routes */
import AuthRoute from "./views/auth/route/AuthRoute";
import BlogRoute from "./views/blog/route/BlogRoute";
import CareerRoute from "./views/career/route/CareerRoute";
import StoreRoute from "./views/store/route/StoreRoute";
import SocialRoute from "./views/social/route/SocialRoute";
/** Important Components */
import Home from "./views/Home";
import Footer from "./components/Footer";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Account } from "./views/auth/redux/authActions";
const App = () => {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => state.auth);
    useEffect(() => {
        dispatch(Account());
    }, [isAuthenticated, dispatch]);
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            {/** Views */}
            <AuthRoute />
            <BlogRoute />
            <CareerRoute />
            <StoreRoute />
            <SocialRoute />
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
