import "../css/ProductCard.css";
import image from "../../../../assets/iphone.jfif";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { AddCart } from "../redux/storeAction";
const ProductCard = ({ props }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const AddToCartHandler = (e) => {
        e.preventDefault();
        if (!isAuthenticated) history.push("/Auth/Login/%2FStore");
        else dispatch(AddCart(e.target.attributes.value.value, 1));
    };
    return (
        <div className="ProductCard">
            <img src={image} alt="Product" id="Image" />
            <p className="fs6 bold" id="Name">
                {props?.name}
            </p>
            <div className="Inline PriceCon">
                <p className="primary-nohover fs3 bold" id="Price">
                    ${props?.price}
                </p>
                <p className="secondary-nohover fs3 bold" id="Rating">
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
                    Add to Cart
                </Link>
                <Link
                    className="success-nohover"
                    to={"/Store/Product/" + props?.id}
                >
                    Learn More
                </Link>
            </div>
        </div>
    );
};
export default ProductCard;
