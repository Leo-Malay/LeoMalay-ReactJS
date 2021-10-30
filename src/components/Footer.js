import "../css/HeaderFooter.css";
import { PageLink } from "./Element";
const Footer = ({ props }) => {
    return (
        <div className="Footer">
            <p id="title">Malay Bhavsar (LeoMalay)</p>
            <div className="NavLink">
                <PageLink
                    props={{
                        value: "Home",
                        to: "/",
                    }}
                />
                <PageLink
                    props={{
                        value: "Products",
                        to: "/ProductHome",
                    }}
                />
                <PageLink
                    props={{
                        value: "Store",
                        to: "/Store",
                    }}
                />
                <PageLink
                    props={{
                        value: "Social",
                        to: "/Social",
                    }}
                />
                <PageLink
                    props={{
                        value: "Cafeteria",
                        to: "/Cafeteria",
                    }}
                />
                <PageLink
                    props={{
                        value: "Blog",
                        to: "/Blog",
                    }}
                />
            </div>
            <div className="NavLink">
                <PageLink
                    props={{
                        value: "Services",
                        to: "/ServiceHome",
                    }}
                />
                <PageLink
                    props={{
                        value: "Inventory",
                        to: "/Inventory",
                    }}
                />
                <PageLink
                    props={{
                        value: "Pay",
                        to: "/Pay",
                    }}
                />
            </div>
            <p id="desc">&copy; 2021 Malay Bhavsar</p>
        </div>
    );
};

export default Footer;
