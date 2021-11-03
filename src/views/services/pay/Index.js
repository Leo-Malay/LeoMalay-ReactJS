import "./css/index.css";
import Header from "../../../components/Header";
const Index = () => {
    return (
        <div className="PayIndex">
            <Header
                props={{
                    title: "LeoPay",
                    color: "error",
                    type: "Pay",
                }}
            />
            <div className="sec1">
                <p className="AlignCenter title bold">LeoPay</p>
                <p className="AlignCenter fs10 bold">
                    New Generation Payment System
                </p>
            </div>
            <div className="sec2">
                <p className="AlignLeft fs15 bold">Faster {"&"} Easier</p>
                <br />
                <p className="AlignRight fs15 bold">
                    Enhanced Privacy {"&"} Security
                </p>
                <br />
                <p className="AlignLeft fs15 bold">24/7 Help-Support</p>
                <br />
                <p className="AlignRight fs15 bold">Simple Payment Plans</p>
                <br />
            </div>
            <div className="sec3">
                <p className="AlignCenter title bold">Why?</p>
                <br />
                <p className="AlignLeft fs15">No Hidden Charges</p>
                <br />
                <p className="AlignRight fs15">Amazing Cashback Offers</p>
                <br />
                <p className="AlignLeft fs15">Excellent Help Support</p>
                <br />
                <p className="AlignRight fs15">Personal Data Protected</p>
                <br />
                <p className="AlignLeft fs15">Private Purchase</p>
                <br />
            </div>
            <div className="sec4">
                <p className="AlignCenter fs17 bold">
                    So what are you waiting for?
                </p>
                <br />
                <p className="AlignCenter fs6">
                    You will need an LeoAuth-Id and a goverment issued identity
                    cetificate/card to opt for the service.
                </p>
                <br />
            </div>
        </div>
    );
};
export default Index;
