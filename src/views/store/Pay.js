import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ProtectedRoute } from "../../Security";
import StoreHeader from "./components/StoreHeader";

const Pay = () => {
    const [ccNumber, setCCNumber] = useState("");
    const [cardHolder, setCardHolder] = useState("");
    const [cardExpiryDate, setCardExpiryDate] = useState("");
    const [cvv, setCVV] = useState("");
    const [address, setAddress] = useState("");
    const { isLoading } = useSelector((state) => state.store);
    const submitHandler = (e) => {
        e.preventDefault();
    };
    return (
        <div className="Pay">
            <ProtectedRoute props={{ path: "/Store/Pay" }} />
            <StoreHeader />
            <form method="POST" action="#" onSubmit={submitHandler}>
                <p id="Header">LeoPay</p>
                <br />
                <textarea
                    type="text"
                    name="ccnumber"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Card Number"
                    rows={5}
                    autoComplete="off"
                    required
                />
                <br />
                <input
                    type="text"
                    name="ccnumber"
                    value={ccNumber}
                    onChange={(e) => setCCNumber(e.target.value)}
                    placeholder="Card Number"
                    autoComplete="off"
                    required
                />
                <br />
                <input
                    type="text"
                    name="cardHolder"
                    value={cardHolder}
                    onChange={(e) => setCardHolder(e.target.value)}
                    placeholder="Card Holder's Name"
                    autoComplete="off"
                    required
                />
                <br />
                <input
                    type="date"
                    name="cardExpiryDate"
                    value={cardExpiryDate}
                    onChange={(e) => setCardExpiryDate(e.target.value)}
                    autoComplete="off"
                    required
                />
                <br />
                <input
                    type="text"
                    name="cvv"
                    value={cvv}
                    onChange={(e) => setCVV(e.target.value)}
                    placeholder="CVV"
                    autoComplete="off"
                    required
                />
                <br />
                <input
                    type="submit"
                    name="submit"
                    value={isLoading ? "..." : "Pay"}
                    className="success-nohover"
                />
                <br />
                <input
                    type="button"
                    name="cancel"
                    value={isLoading ? "..." : "Cancel"}
                    className="error-nohover"
                />
            </form>
        </div>
    );
};

export default Pay;
