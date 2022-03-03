import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddCart, RemoveCart } from "../redux/storeAction";
import image from "../../../assets/iphone.jfif";
import { GrAdd, GrTrash } from "react-icons/gr";
import { IoRemove } from "react-icons/io5";
const CartItem = ({ props }) => {
    const dispatch = useDispatch();
    const [qty, setQty] = useState(props.qty);
    const removeHandler = (e) => {
        e.preventDefault();
        dispatch(RemoveCart(props.productId));
    };
    const saveHandler = (e) => {
        e.preventDefault();
        dispatch(
            AddCart(
                props.productId,
                parseInt(e.target.attributes.nodevalue.nodeValue)
            )
        );
    };
    return (
        <div className="CartItem Inline">
            <img src={image || props.image} alt="Product" />
            <div className="content">
                <p className="Name">{props.productName}</p>
                <p className="Price">${props.price}</p>
                <p className="Rating"></p>
                <div className="quantity Inline">
                    <button
                        onClick={() => {
                            if (qty > 1) setQty(qty - 1);
                            saveHandler();
                        }}
                    >
                        <IoRemove id="icon" />
                    </button>
                    <p className="qty">{qty}</p>
                    <button
                        onClick={() => {
                            if (qty < props.buyQtyLimit) setQty(qty + 1);
                            saveHandler();
                        }}
                    >
                        <GrAdd id="icon" />
                    </button>
                    <button onClick={removeHandler}>
                        <GrTrash id="icon" />
                    </button>
                </div>
            </div>
        </div>
    );
    /*
    return (
        <div className="CartItem Inline">
            <img
                src={props.image === "null" ? image : props.image}
                alt="Product"
            />
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td>{props.productName}</td>
                        </tr>
                        <tr>
                            <th>Quantity</th>
                            <td>
                                <button
                                    className="error-nohover minus"
                                    onClick={() => {
                                        if (qty > 1) {
                                            setQty(qty - 1);
                                            setUpdated(true);
                                        }
                                    }}
                                >
                                    &#8722;
                                </button>
                                {"  " + qty + "  "}
                                <button
                                    className="success-nohover plus"
                                    onClick={() => {
                                        if (qty < props.buyQtyLimit) {
                                            setQty(qty + 1);
                                            setUpdated(true);
                                        }
                                    }}
                                >
                                    &#43;
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <th>Price</th>
                            <td>{props.price}</td>
                        </tr>
                        <tr>
                            <th>Total Amount</th>
                            <td>{props.price * qty}</td>
                        </tr>
                        <tr>
                            <td>
                                <Link
                                    className="error-nohover"
                                    to="/Store/Cart"
                                    onClick={removeHandler}
                                >
                                    Remove
                                </Link>
                            </td>
                            <td>
                                {updated && (
                                    <Link
                                        className="success-nohover"
                                        to="/Store/Cart"
                                        onClick={saveHandler}
                                        nodevalue={qty}
                                    >
                                        Save
                                    </Link>
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
    */
};
export default CartItem;
