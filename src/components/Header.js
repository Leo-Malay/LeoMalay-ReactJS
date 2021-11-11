import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../css/HeaderFooter.css";
import { logout } from "../views/products/auth/redux/authActions";
import { LinkButton } from "./Element";
const Header = ({ props }) => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const logoutHandler = (e) => {
        e.preventDefault();
        dispatch(logout());
    };
    return (
        <div className="Header">
            <Link
                to={() => {
                    if (props.type === "Auth") return "/Auth";
                    if (props.type === "Store") return "/Store";
                    if (props.type === "Blog") return "/Blog";
                    if (props.type === "Social") return "/Social";
                    if (props.type === "Pay") return "/Pay";
                    return "";
                }}
            >
                <p className={props.color || "primary"} id="title">
                    {props.title || "LeoMalay"}
                </p>
            </Link>
            <div className="LeftMenu">
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
                            to: "/Auth/Login",
                            color: "success",
                        }}
                    />
                )}
                {!isAuthenticated && (
                    <LinkButton
                        props={{
                            value: "Register",
                            to: "/Auth/NewAccount",
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
                    <button
                        value="Logout"
                        className="error LinkButton fs4"
                        onClick={logoutHandler}
                    >
                        Logout
                    </button>
                )}
            </div>
        </div>
    );
};

export default Header;
