import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RemoveCart } from "../redux/storeAction";

const CartItem = ({ props }) => {
    const dispatch = useDispatch();
    const removeHandler = (e) => {
        e.preventDefault();
        dispatch(RemoveCart(e.target.attributes.value.value));
    };
    return (
        <tr key={props?.productId}>
            <td style={{ width: "65%" }}>{props?.productName}</td>
            <td style={{ width: "15%" }}>{props?.qty}</td>
            <td style={{ width: "15%" }}>{props?.price}</td>
            <td>
                <Link
                    className="error-nohover"
                    to="/Store/Cart"
                    onClick={removeHandler}
                    value={props?.productId}
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
    );
};
export default CartItem;
