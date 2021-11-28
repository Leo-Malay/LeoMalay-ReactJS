import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AddCart, RemoveCart } from "../redux/storeAction";
import image from "../../../assets/iphone.jfif";
const CartItem = ({ props }) => {
    const dispatch = useDispatch();
    const [qty, setQty] = useState(props.qty);
    const [updated, setUpdated] = useState(false);
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
        setUpdated(false);
    };

    return (
        <div className="CartItem Inline">
            <img
                src={props.image === "null" ? image : props?.image}
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
                            <th>TotalAmount</th>
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
};
export default CartItem;
