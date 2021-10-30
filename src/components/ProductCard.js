import "../css/components/ProductCard.css";
import image from "../assets/iphone.jfif";
import { Link } from "react-router-dom";
const ProductCard = ({ props }) => {
    return (
        <div className="ProductCard">
            <img src={image} alt="Product" id="Image" />
            <p id="Name">{props?.name}</p>
            <div className="Inline PriceCon">
                <p className="primary-nohover" id="Price">
                    ${props?.price}
                </p>
                <p className="secondary-nohover" id="Rating">
                    {props?.rating}&#9733;
                </p>
            </div>
            <div id="ButtonGrp">
                <Link className="primary-nohover" to="/Store">
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
