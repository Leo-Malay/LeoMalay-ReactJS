import "../css/HeaderFooter.css";
import { PageLink } from "./Element";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
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
            <div className="SocialLinks">
                <Link to="/">
                    <BsFacebook id="icons" />
                </Link>
                <Link to="/">
                    <BsInstagram id="icons" />
                </Link>
                <Link to="/">
                    <BsTwitter id="icons" />
                </Link>
                <Link to="/">
                    <BsLinkedin id="icons" />
                </Link>
            </div>
            <p id="desc">&copy; 2021 Malay Bhavsar</p>
        </div>
    );
};

export default Footer;
