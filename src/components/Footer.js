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
                        value: "Store",
                        to: "/Store/Index",
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
                        value: "Blog",
                        to: "/Blog/Index",
                    }}
                />
            </div>

            <p id="desc">&copy; 2021 Malay Bhavsar</p>
        </div>
    );
};

export default Footer;
