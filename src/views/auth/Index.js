import AuthHeader from "./component/AuthHeader";
const Index = () => {
    return (
        <div className="AuthIndex">
            <AuthHeader />
            <div className="sec1">
                <p className="AlignCenter title bold">LeoAuth</p>
                <p className="AlignCenter fs12 bold">
                    One Account for all of our Services
                </p>
            </div>
            <div className="sec2">
                <p className="AlignLeft fs17 bold">Why?</p>
                <br />
                <p className="AlignLeft fs6">
                    Safe {"&"} Secure
                    <br />
                    <br />
                    Use LeoProducts {"&"} LeoServices for Free
                    <br />
                    <br />
                    Enhanced Privacy and Safety measures
                </p>
            </div>
            <div className="sec3">
                <p className="AlignLeft fs17 bold">Data Stored by Us!</p>
                <br />
                <p className="AlignJustify fs6">
                    Here at LeoAuth, We will store personal but ultra basic
                    details which includes your Name, Email, Mobile, Address,
                    City, State{" & "}Country along with your Username {"& "}
                    Password. We may also store your Credit/Debit Card Info if
                    you opt for certain services. Also you may need to provide
                    your scanned photo of goverment issued certificate or
                    identity card for some services.
                </p>
            </div>
        </div>
    );
};
export default Index;
