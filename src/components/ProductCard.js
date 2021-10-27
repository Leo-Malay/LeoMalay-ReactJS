import "../css/components/ProductCard.css";
import image from "../assets/iphone.jfif";
import { Link } from "react-router-dom";
const ProductCard = ({ props }) => {
    return (
        <div className="ProductCard">
            <img src={image} alt="Product" id="Image" />
            <p id="Name">Iphone12 ProMax</p>
            <div className="Inline PriceCon">
                <p className="primary" id="Price">
                    $12.99
                </p>
                <p className="secondary" id="Rating">
                    5&#9733;
                </p>
            </div>
            <div id="ButtonGrp">
                <Link className="primary" to="/Store">
                    Add to Cart
                </Link>
                <Link className="success" to={"/Store/Product?id=" + props.id}>
                    Learn More
                </Link>
            </div>
        </div>
    );
};
export default ProductCard;
