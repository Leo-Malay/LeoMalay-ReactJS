import StoreHeader from "./components/StoreHeader";
import "./css/Cart.css";
import { LinkButton } from "../../../components/Element";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CartItem from "./components/CartItem";
import { Cart as cartAction } from "./redux/storeAction";
import { toast } from "react-toastify";
import { ProtectedRoute } from "../../../Security";
const Cart = () => {
    const dispatch = useDispatch();
    const { cart, err, suc, totalCost } = useSelector((state) => state.store);
    useEffect(() => {
        if (cart === undefined) dispatch(cartAction());
        if (err !== undefined)
            toast.error(err, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        if (suc !== undefined)
            toast.success(suc, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        dispatch({ type: "STORE_ERRSUC_CLEAR" });
    }, [dispatch, cart, err, suc]);
    return (
        <div className="Cart">
            <ProtectedRoute props={{ path: "/Store/Cart" }} />
            <StoreHeader />
            <div className="Cart-Container">
                <div className="Left">
                    <p className="fs11 bold" id="title">
                        Cart
                    </p>
                    <table border={0} style={{ width: "95%", margin: "auto" }}>
                        <tbody>
                            <tr>
                                <th style={{ width: "55%" }}>Name</th>
                                <th style={{ width: "15%" }}>Quantity</th>
                                <th style={{ width: "15%" }}>Cost</th>
                            </tr>
                            {cart !== undefined &&
                                cart.map((ele, i) => {
                                    return (
                                        <CartItem props={ele} key={i} />
                                        /*<tr key={ele.productId}>
                                            <td style={{ width: "65%" }}>
                                                {ele.productName}
                                            </td>
                                            <td style={{ width: "15%" }}>
                                                {ele.qty}
                                            </td>
                                            <td style={{ width: "15%" }}>
                                                {ele.price}
                                            </td>
                                            <td>
                                                <Link
                                                    className="error-nohover"
                                                    to="/Store/Cart"
                                                    onClick={removeHandler}
                                                    value={ele.productId}
                                                    style={{
                                                        paddingRight: 5,
                                                        paddingLeft: 5,
                                                        paddingBottom: 3,
                                                        paddingTop: 3,
                                                    }}
                                                >
                                                    x
                                                </Link>
                                            </td>
                                        </tr>
                                        */
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
                <div className="Right">
                    <hr />
                    <p className="fs11 bold" id="title">
                        LeoStore
                    </p>
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
                            {cart !== undefined &&
                                cart.map((ele) => {
                                    return (
                                        <tr key={ele.productId}>
                                            <td
                                                className="itemname"
                                                style={{ width: "60%" }}
                                            >
                                                {ele.productName}
                                            </td>
                                            <td style={{ width: "20%" }}>
                                                {ele.qty * ele.price}
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
                                    {totalCost || 0}
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
        </div>
    );
};

export default Cart;
