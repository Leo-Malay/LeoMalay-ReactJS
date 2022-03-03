import StoreHeader from "./components/StoreHeader";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
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
    const { cart, trial, totalCost } = useSelector((state) => state.store);
    const placeOrderHandler = async (e) => {
        if (cart && cart.length > 0) {
            e.preventDefault();
            await dispatch(
                PlaceOrder(
                    "CC1234",
                    new Date().toISOString(),
                    "CreditCard",
                    totalCost,
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
        <div className="Cart Center">
            <ProtectedRoute props={{ path: "/Store/Cart" }} />
            <StoreHeader />
            {(!cart || cart.length === 0) && (
                <div className="AlignCenter bold fs15">
                    <br />
                    <br />
                    Head over to the store and add some things into the cart :)
                    <br />
                    <br />
                </div>
            )}
            {cart && cart.length > 0 && (
                <div className="Container">
                    <p className="fs11 bold" id="title">
                        Cart
                    </p>
                    <div className="top">
                        <p className="subTotalTitle">Payable Amount</p>
                        <p className="subTotal">${200 || totalCost}</p>
                        <button onClick={placeOrderHandler}>
                            Proceed to Payment
                        </button>
                    </div>
                    <div className="bottom">
                        {cart !== undefined &&
                            cart.map((ele, i) => {
                                return <CartItem props={ele} key={i} />;
                            })}
                        {cart !== undefined &&
                            cart.map((ele, i) => {
                                return <CartItem props={ele} key={i} />;
                            })}
                        {cart !== undefined &&
                            cart.map((ele, i) => {
                                return <CartItem props={ele} key={i} />;
                            })}
                        {cart !== undefined &&
                            cart.map((ele, i) => {
                                return <CartItem props={ele} key={i} />;
                            })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
