// import { useState } from "react";
import "./css/gateway.css";
const Gateway = () => {
    // const [payType, setPayType] = useState();
    return (
        <div className="Gateway">
            <form action="#" method="POST" className="PayType">
                <div className="RadioContainer">
                    <input type="radio" name="payType" value="Credit Card" />
                    <label>Credit Card</label>
                </div>
                <div className="RadioContainer">
                    <input type="radio" name="payType" value="Debit Card" />
                    <label>Debit Card</label>
                </div>
                <div className="RadioContainer">
                    <input type="radio" name="payType" value="UPI" />
                    <label>UPI</label>
                </div>
            </form>
            <form action="#" method="POST" className="Card"></form>
            <form action="#" method="POST" className="UPI"></form>
        </div>
    );
};
export default Gateway;
