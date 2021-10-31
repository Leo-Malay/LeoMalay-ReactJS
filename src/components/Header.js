import { Link } from "react-router-dom";
import "../css/HeaderFooter.css";
import { LinkButton } from "./Element";
const Header = ({ props }) => {
    const isAuthenticated = false;
    return (
        <div className="Header">
            <Link
                to={() => {
                    if (props.type === "Auth") return "/Auth/Account";
                    if (props.type === "Store") return "/Store";
                    if (props.type === "Blog") return "/Blog";
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
                    <LinkButton
                        props={{
                            value: "Logout",
                            to: "/",
                            color: "error",
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default Header;
