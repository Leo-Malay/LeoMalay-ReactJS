import StoreHeader from "./components/StoreHeader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CartItem from "./components/CartItem";
import {
    Cart as cartAction,
    PlaceOrder,
    Order as orderAction,
} from "./redux/storeAction";
import { ProtectedRoute } from "../../Security";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
const Cart = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { cart, trial } = useSelector((state) => state.store);
    var totalCostCalc = 0;
    const placeOrderHandler = async (e) => {
        if (cart && cart.length > 0) {
            e.preventDefault();
            await dispatch(
                PlaceOrder(
                    "CC1234",
                    new Date().toISOString(),
                    "CreditCard",
                    totalCostCalc,
                    "Will be delivered to your address here"
                )
            );
            await dispatch(cartAction());
            await dispatch(orderAction());
            history.push("/Store/Order");
        } else {
            toast.error("Add some items in cart to continue", {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };
    useEffect(() => {
        if (cart === undefined && trial < 2) {
            dispatch(cartAction());
            dispatch({ type: "STORE_INC_TRIAL" });
        }
    }, [dispatch, cart, trial]);
    return (
        <div className="Cart">
            <ProtectedRoute props={{ path: "/Store/Cart" }} />
            <StoreHeader />
            {(!cart || cart.length === 0) && (
                <div className="AlignCenter bold fs17">
                    <br />
                    <br />
                    Head over to the store and add somethings into the cart :)
                    <br />
                    <br />
                </div>
            )}
            {cart && cart.length > 0 && (
                <div className="Cart-Container">
                    <div className="Left">
                        <p className="fs11 bold" id="title">
                            Cart
                        </p>
                        {cart !== undefined &&
                            cart.map((ele, i) => {
                                return <CartItem props={ele} key={i} />;
                            })}
                        <CartItem
                            props={{
                                productId: "abbba",
                                productName: "Helicopter Helicopter",
                                price: 999,
                                qty: 3,
                                buyQtyLimit: 4,
                            }}
                            key={-1}
                        />
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
                                        totalCostCalc += ele.qty * ele.price;
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
                                        {totalCostCalc || 0}
                                        <hr />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <input
                            type="button"
                            value="Proceed To Pay"
                            className="success-nohover"
                            onClick={placeOrderHandler}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
