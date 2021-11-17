import StoreHeader from "./components/StoreHeader";
import "./css/Product.css";
import image from "../../../assets/iphone.jfif";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AddCart, Product as productAction } from "./redux/storeAction";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const Product = () => {
    const { id } = useParams();
    const { product, err, suc } = useSelector((state) => state.store);
    const dispatch = useDispatch();
    const AddToCartHandler = (e) => {
        e.preventDefault();
        dispatch(AddCart(e.target.attributes.value.value, 1));
    };
    useEffect(() => {
        if (product === undefined || product._id !== id)
            dispatch(productAction(id));
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
    }, [dispatch, id, suc, err, product]);
    return (
        <div className="Product">
            <StoreHeader />
            <div className="Product-section">
                <p className="fs14 bold" id="title">
                    {product?.name}
                </p>
                <img src={image} alt="Product" />
                <p className="fs3" id="description">
                    {product?.description}
                </p>
                <br />
                {product?.isAvailable && (
                    <input
                        type="button"
                        value="Product is Available"
                        className="primary-nohover LinkButton"
                    />
                )}
                {!product?.isAvailable && (
                    <input
                        type="button"
                        value="Product is Not Available at the Moment"
                        className="error-nohover LinkButton"
                    />
                )}
                {product?.isAvailable && (
                    <Link
                        value={product?._id}
                        to="/Store"
                        className="success-nohover LinkButton"
                        onClick={AddToCartHandler}
                    >
                        Add to Cart
                    </Link>
                )}
                <table border={0}>
                    <tbody>
                        <tr>
                            <th>Price</th>
                            <td className="fs3">${product?.price}</td>
                        </tr>
                        <tr>
                            <th>Rating</th>
                            <td className="fs3">{product?.rating}&#9733;</td>
                        </tr>
                        <tr>
                            <th>Sold By</th>
                            <td className="fs3">{product?.soldBy}</td>
                        </tr>
                        <tr>
                            <th>Specification</th>
                            <td className="fs3">
                                <ul>
                                    {product?.specs.map((ele, i) => {
                                        return <li key={i}>{ele}</li>;
                                    })}
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th>Reviews</th>
                            <td>
                                {product?.reviews.map((ele) => {
                                    return (
                                        <div
                                            className="ReviewCard"
                                            key={ele?.review_id}
                                        >
                                            <p className="fs3 bold" id="title">
                                                {ele.auth_id}
                                            </p>
                                            <p className="fs3" id="comment">
                                                {ele.comment}
                                            </p>
                                        </div>
                                    );
                                })}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Product;
