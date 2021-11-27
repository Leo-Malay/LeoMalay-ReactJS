import SocialHeader from "./components/SocialHeader";
import { Link } from "react-router-dom";
import "./css/index.css";
const Index = () => {
    return (
        <div className="SocialIndex">
            <SocialHeader />
            <div className="sec1">
                <p className="AlignCenter fs17 bold">Meet. Connect. Grow.</p>
                <p className="AlignCenter title bold">LeoSocial</p>
                <br />
                <center>
                    <Link className="AlignCenter primary-nohover" to="/Social">
                        Visit Social Now
                    </Link>
                </center>
            </div>
            <div className="sec2">
                <p className="AlignLeft fs13 bold">Enhanced Security</p>
                <br />
                <p className="AlignRight fs13 bold">Simple {"&"} Safe</p>
                <br />
                <p className="AlignLeft fs13 bold">Enchanced Privacy</p>
                <br />
                <p className="AlignRight fs13 bold">24/7 Help-Support</p>
                <br />
            </div>
            <div className="sec3">
                <p className="AlignCenter fs17 bold">
                    Dear User, We Pledge to take care of your Privacy.
                </p>
                <br />
                <p className="AlignJustify fs5">
                    This platform is developed keeping in mind to increase the
                    privacy and connectivity. We are here to help if you find an
                    difficulty in using the platform. And if you find any things
                    that shouldn't be there or something that isn't working then
                    please feel free to contact us immediately.
                </p>
            </div>
        </div>
    );
};
export default Index;
