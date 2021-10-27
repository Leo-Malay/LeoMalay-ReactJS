import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../css/views/Cart.css";
import { LinkButton } from "../../components/Element";
const Cart = () => {
    return (
        <div className="Cart">
            <Header
                props={{ title: "LeoStore", color: "success", type: "Store" }}
            />
            <div className="Cart-Container">
                <div className="Left">
                    <p id="title">Cart</p>
                    <table border={0} style={{ width: "95%", margin: "auto" }}>
                        <tbody>
                            <tr>
                                <th style={{ width: "65%" }}>Name</th>
                                <th style={{ width: "15%" }}>Cost</th>
                            </tr>
                            <br />
                            <tr>
                                <td style={{ width: "65%" }}>
                                    Iphone 12 Pro Max Grill Plus with Cheese and
                                    Mayo On the way
                                </td>
                                <td style={{ width: "15%" }}>799</td>
                                <td>
                                    <LinkButton
                                        props={{
                                            value: "X",
                                            color: "error-inv",
                                            to: "/Store/Cart",
                                        }}
                                    />
                                </td>
                            </tr>
                            <br />
                        </tbody>
                    </table>
                </div>
                <div className="Right">
                    <hr />
                    <p id="title">LeoStore</p>
                    <p id="subtitle">By Malay Bhavsar (Leo-Malay)</p>
                    <table border={0}>
                        <tbody>
                            <tr>
                                <th style={{ width: "60%" }}>
                                    <hr />
                                    Name
                                    <hr />
                                </th>
                                <th style={{ width: "20%" }}>
                                    <hr />
                                    Cost
                                    <hr />
                                </th>
                            </tr>
                            <br />
                            <tr>
                                <td style={{ width: "60%" }}>
                                    Iphone 12 Pro Max Grill Plus with Cheese and
                                    Mayo On the way
                                </td>
                                <td style={{ width: "20%" }}>799</td>
                            </tr>
                            <tr>
                                <td style={{ width: "60%" }}>
                                    Iphone 12 Pro Max Grill Plus with Cheese and
                                    Mayo On the way
                                </td>
                                <td style={{ width: "20%" }}>799</td>
                            </tr>

                            <tr>
                                <th style={{ width: "60%" }}>
                                    <br />
                                    <hr />
                                    Amount to be Paid
                                    <hr />
                                </th>

                                <td style={{ width: "20%" }}>
                                    <br />
                                    <hr />
                                    totalCost
                                    <hr />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <LinkButton
                        props={{
                            value: "Proceed To Pay",
                            to: "/Store/Cart",
                            color: "success-inv",
                        }}
                    />
                </div>
            </div>
            <Footer
                props={{ title: "LeoStore", color: "success", type: "Store" }}
            />
        </div>
    );
};

export default Cart;
