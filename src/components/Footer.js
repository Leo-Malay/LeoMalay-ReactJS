import { Link } from "react-router-dom";
import "../css/HeaderFooter.css";
import { PageLink } from "./Element";
const Footer = ({ props }) => {
    return (
        <div className="Footer">
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
            <br />
            <div className="NavLink">
                <PageLink
                    props={{
                        value: "Home",
                        to: "/",
                    }}
                />
                <br />
                <PageLink
                    props={{
                        value: "Store",
                        to: "/Store",
                    }}
                />
                <br />
                <PageLink
                    props={{
                        value: "Cafeteria",
                        to: "/Cafeteria",
                    }}
                />
                <br />
                <PageLink
                    props={{
                        value: "Blog",
                        to: "/Blog",
                    }}
                />
            </div>
            <br />
        </div>
    );
};

export default Footer;
