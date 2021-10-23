import "../css/HeaderFooter.css";
import { PageLink } from "./Element";
const Footer = ({ props }) => {
    return (
        <div className="Footer">
            <p className={props.color || "primary"} id="title">
                {props.title || "LeoMalay"}
            </p>
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
                        value: "Blog",
                        to: "/Blog",
                    }}
                />
            </div>
        </div>
    );
};

export default Footer;
