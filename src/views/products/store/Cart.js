import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import "../../../css/views/products/Cart.css";
import StoreCartData from "../../../data/StoreCart.json";
import { LinkButton } from "../../../components/Element";
const Cart = () => {
    const getCart = (auth_id) => {
        return StoreCartData.filter(function (StoreCartData) {
            return StoreCartData.auth_id === auth_id;
        });
    };
    const Data = getCart("Malay")[0];
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
                                <th style={{ width: "55%" }}>Name</th>
                                <th style={{ width: "15%" }}>Quantity</th>
                                <th style={{ width: "15%" }}>Cost</th>
                            </tr>
                            <br />
                            {Data?.items.map((ele) => {
                                return (
                                    <tr key={ele.item_id}>
                                        <td style={{ width: "65%" }}>
                                            {ele.name}
                                        </td>
                                        <td style={{ width: "15%" }}>
                                            {ele.quantity}
                                        </td>
                                        <td style={{ width: "15%" }}>
                                            {ele.cost}
                                        </td>
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
                                );
                            })}
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
                            {Data?.items.map((ele) => {
                                return (
                                    <tr key={ele.item_id}>
                                        <td
                                            className="itemname"
                                            style={{ width: "60%" }}
                                        >
                                            {ele.name}
                                        </td>
                                        <td style={{ width: "20%" }}>
                                            {ele.quantity * ele.cost}
                                        </td>
                                    </tr>
                                );
                            })}
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
                                    {Data?.totalCost}
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
