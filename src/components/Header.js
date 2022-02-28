import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../css/HeaderFooter.css";
import { logout } from "../views/auth/redux/authActions";
import { BiMenu } from "react-icons/bi";
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
                <button className="dropbtn" onClick={viewHandler}>
                    <BiMenu id="icon" />
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
                        <div>
                            <Link
                                to={
                                    "/Auth/Login/" +
                                    (encodeURIComponent(props.redirect) || "0")
                                }
                            >
                                Login
                            </Link>
                            <Link
                                to={
                                    "/Auth/NewAccount/" +
                                    (encodeURIComponent(props.redirect) || "0")
                                }
                            >
                                Register
                            </Link>
                        </div>
                    )}

                    {isAuthenticated && (
                        <div>
                            <Link to="/Auth/Account">Account</Link>
                            <Link to="/" onClick={logoutHandler}>
                                Logout
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
