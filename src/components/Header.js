import "../css/HeaderFooter.css";
import { LinkButton } from "./Element";
const Header = ({ props }) => {
    const isAuthenticated = false;
    return (
        <div className="Header">
            <p className={props.color || "primary"} id="title">
                {props.title || "LeoMalay"}
            </p>
            {!isAuthenticated && (
                <div className="LeftMenu">
                    <LinkButton
                        props={{
                            value: "Login",
                            to: "/Auth/Login",
                            color: "success",
                        }}
                    />
                    <LinkButton
                        props={{
                            value: "Register",
                            to: "/Auth/NewAccount",
                            color: "primary",
                        }}
                    />
                </div>
            )}
            {isAuthenticated && (
                <div className="LeftMenu">
                    <LinkButton
                        props={{
                            value: "Account",
                            to: "/Auth/Account",
                            color: "primary",
                        }}
                    />
                    <LinkButton
                        props={{
                            value: "Logout",
                            to: "/",
                            color: "error",
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default Header;
