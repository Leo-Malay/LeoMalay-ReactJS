import { Link } from "react-router-dom";
import StoreHeader from "./components/StoreHeader";
import "./css/index.css";
const Index = () => {
    return (
        <div className="StoreIndex">
            <StoreHeader />
            <div className="sec1">
                <p className="AlignCenter fs17 bold">Welcome to the</p>
                <p className="AlignCenter title bold">LeoStore</p>
                <br />
                <center>
                    <Link className="AlignCenter success-nohover" to="/Store">
                        Visit Store Now
                    </Link>
                </center>
            </div>
            <div className="sec2">
                <p className="AlignLeft fs13 bold">Easy {"&"} Fast</p>
                <br />
                <p className="AlignRight fs13 bold">Express Delivery</p>
                <br />
                <p className="AlignLeft fs13 bold">
                    Fresh Veggies {"&"} Milk Items
                </p>
                <br />
                <p className="AlignRight fs13 bold">Secure Payment</p>
                <br />
                <p className="AlignLeft fs13 bold">24/7 Help-Support</p>
                <br />
                <p className="AlignRight fs13 bold">Verified Products</p>
            </div>
            <div className="sec3">
                <p className="AlignCenter fs17 bold">
                    Dear Customer, We offer several services on our store.
                </p>
                <br />
                <p className="AlignCenter fs5">
                    You can Subscribe to certian items that you require daily,
                    and they will be delivered to you in the morning everyday.
                    <br />
                    All the vegetables and milk products comes from your local
                    shops to ensure that they are fresh.
                    <br />
                    Our delivery partners check expiry and manufacture date of
                    all products before delivering them to you.
                </p>
            </div>
            <div className="sec4">
                <p className="AlignCenter fs17 bold">
                    Dear Vendor, Want to join our growing network?
                </p>
                <br />
                <p className="AlignCenter fs5">
                    Mail us your application along with basic details and your
                    selling certificate issued by the goverment and having an
                    atleast 1 year from expiry. We will send an inspections team
                    to your address and they will confirm all the details
                    provided by you. You will be required to meet certian
                    expecations of our Quality Regulations.
                </p>
            </div>
        </div>
    );
};
export default Index;
