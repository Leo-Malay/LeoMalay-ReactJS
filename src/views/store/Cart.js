import StoreHeader from "./components/StoreHeader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CartItem from "./components/CartItem";
import { Cart as cartAction, PlaceOrder } from "./redux/storeAction";
import { toast } from "react-toastify";
import { ProtectedRoute } from "../../Security";
import { useHistory } from "react-router";
const Cart = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { cart, err, suc } = useSelector((state) => state.store);
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
            await history.push("/Store/Order");
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
    console.log(cart);
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
                        <table
                            border={0}
                            style={{ width: "95%", margin: "auto" }}
                        >
                            <tbody>
                                <tr>
                                    <th style={{ width: "55%" }}>Name</th>
                                    <th style={{ width: "15%" }}>Quantity</th>
                                    <th style={{ width: "15%" }}>Cost</th>
                                </tr>
                                {cart !== undefined &&
                                    cart.map((ele, i) => {
                                        return <CartItem props={ele} key={i} />;
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
