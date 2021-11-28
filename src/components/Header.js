import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../css/HeaderFooter.css";
import { logout } from "../views/auth/redux/authActions";
import { LinkButton } from "./Element";
const Header = ({ props }) => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [show, setShow] = useState("none");
    const logoutHandler = (e) => {
        e.preventDefault();
        dispatch(logout());
    };
    const viewHandler = () => {
        if (show === "none") setShow("block");
        else setShow("none");
    };
    return (
        <div className="Header">
            <Link
                to={() => {
                    if (props.type === "Auth") return "/Auth/Account";
                    if (props.type === "Store") return "/Store";
                    if (props.type === "Blog") return "/Blog";
                    if (props.type === "Social") return "/Social";
                    return "";
                }}
            >
                <p className={props.color || "primary"} id="title">
                    {props.title || "LeoMalay"}
                </p>
            </Link>
            <div className="LeftMenu">
                <div className="MobileView">
                    <button className="dropbtn" onClick={viewHandler}>
                        &#9776;
                    </button>
                    <div className="dropdown-content" style={{ display: show }}>
                        {props.type === "Store" && (
                            <Link to="/Store/Cart">Cart</Link>
                        )}

                        {props.type === "Store" && (
                            <Link to="/Store/Order">Order</Link>
                        )}

                        {props.type === "Blog" && (
                            <Link to="/Blog/Write">Write</Link>
                        )}

                        {!isAuthenticated && (
                            <Link
                                to={
                                    "/Auth/Login/" +
                                    (encodeURIComponent(props.redirect) || "0")
                                }
                            >
                                Login
                            </Link>
                        )}

                        {!isAuthenticated && (
                            <Link
                                to={
                                    "/Auth/NewAccount/" +
                                    (encodeURIComponent(props.redirect) || "0")
                                }
                            >
                                Register
                            </Link>
                        )}

                        {isAuthenticated && (
                            <Link to="/Auth/Account">Account</Link>
                        )}

                        {isAuthenticated && (
                            <Link to="/" onClick={logoutHandler}>
                                Logout
                            </Link>
                        )}
                    </div>
                </div>
                <div className="PCView">
                    {props.type === "Store" && (
                        <LinkButton
                            props={{
                                value: "Cart",
                                to: "/Store/Cart",
                                color: "primary",
                            }}
                        />
                    )}
                    {props.type === "Store" && (
                        <LinkButton
                            props={{
                                value: "Order",
                                to: "/Store/Order",
                                color: "primary",
                            }}
                        />
                    )}
                    {props.type === "Blog" && (
                        <LinkButton
                            props={{
                                value: "Write",
                                to: "/Blog/Write",
                                color: "secondary",
                            }}
                        />
                    )}
                    {!isAuthenticated && (
                        <LinkButton
                            props={{
                                value: "Login",
                                to:
                                    "/Auth/Login/" +
                                    (encodeURIComponent(props.redirect) || "0"),
                                color: "success",
                            }}
                        />
                    )}
                    {!isAuthenticated && (
                        <LinkButton
                            props={{
                                value: "Register",
                                to:
                                    "/Auth/NewAccount/" +
                                    (encodeURIComponent(props.redirect) || "0"),
                                color: "primary",
                            }}
                        />
                    )}

                    {isAuthenticated && (
                        <LinkButton
                            props={{
                                value: "Account",
                                to: "/Auth/Account",
                                color: "primary",
                            }}
                        />
                    )}
                    {isAuthenticated && (
                        <Link
                            to="/"
                            className="error LinkButton"
                            onClick={logoutHandler}
                        >
                            Logout
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
