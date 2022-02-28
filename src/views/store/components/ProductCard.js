import image from "../../../assets/iphone.jfif";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { AddCart } from "../redux/storeAction";
import { BsFillCartPlusFill, BsFillHeartFill } from "react-icons/bs";
const ProductCard = ({ props }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const AddToCartHandler = (e) => {
        e.preventDefault();
        if (!isAuthenticated) history.push("/Auth/Login/%2FStore");
        else dispatch(AddCart(e.target.attributes.value.nodeValue, 1));
    };
    return (
        <Link className="ProductCard" to={"/Store/Product/" + props?.id}>
            <img src={image} alt="Product" id="Image" />
            <div className="content">
                <p className="bold" id="Name">
                    {props?.name}
                </p>
                <p id="Price">
                    ${props?.price}{" "}
                    {props?.discount && <span id="discount">10% OFF</span>}
                </p>
                <p id="Rating">
                    {props?.rating === -1 ? "5.0" : props?.rating} &#9733;
                </p>
                <button
                    className="quickCart"
                    onClick={AddToCartHandler}
                    value={props?.id}
                >
                    <BsFillCartPlusFill id="icon" />
                </button>
                <button className="like">
                    <BsFillHeartFill id="icon" />
                </button>
            </div>
        </Link>
    );
    /*return (
        <Link className="ProductCard" to={"/Store/Product/" + props?.id}>
            <img src={image} alt="Product" id="Image" />
            <p className="bold" id="Name">
                {props?.name}
            </p>
            <div className="Inline PriceCon">
                <p className="primary-nohover bold" id="Price">
                    ${props?.price}
                </p>
                <p className="secondary-nohover bold" id="Rating">
                    {props?.rating === -1 ? "" : props?.rating}&#9733;
                </p>
            </div>
            <div id="ButtonGrp">
                <Link
                    className="primary-nohover"
                    to="/Store"
                    onClick={AddToCartHandler}
                    value={props?.id}
                >
                    <BsFillCartPlusFill id="#icon" />
                </Link>
                <Link
                    className="success-nohover"
                    to={"/Store/Product/" + props?.id}
                >
                    <BsHeart id="#icon" />
                </Link>
            </div>
        </Link>
    );
    */
};
export default ProductCard;
