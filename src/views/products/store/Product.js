import Header from "../../../components/Header";
import "./css/Product.css";
import ProductData from "../../../data/Store.json";
import image from "../../../assets/iphone.jfif";
import { useParams } from "react-router";
import { LinkButton } from "../../../components/Element";
const Product = () => {
    const { id } = useParams();
    const getProduct = (id) => {
        return ProductData.filter(function (ProductData) {
            return ProductData.id === id;
        });
    };
    const Data = getProduct(id)[0];
    return (
        <div className="Product">
            <Header
                props={{ title: "LeoStore", color: "success", type: "Store" }}
            />
            <div className="Product-section">
                <p className="fs14 bold" id="title">
                    {Data?.name}
                </p>
                <img src={image} alt="Product" />
                <p className="fs3" id="description">
                    {Data?.description}
                </p>
                <br />
                {Data.isAvailable && (
                    <LinkButton
                        props={{
                            value: "Product is Available",
                            to: "/Store",
                            color: "success",
                        }}
                    />
                )}
                {!Data.isAvailable && (
                    <LinkButton
                        props={{
                            value: "Product is Not Available at the Moment",
                            to: "/Store",
                            color: "error",
                        }}
                    />
                )}
                {Data.isAvailable && (
                    <LinkButton
                        props={{
                            value: "Add to Cart",
                            to: "/Store",
                            color: "primary",
                        }}
                    />
                )}
                <table border={0}>
                    <tbody>
                        <tr>
                            <th>Price</th>
                            <td className="fs3">${Data?.price}</td>
                        </tr>
                        <tr>
                            <th>Rating</th>
                            <td className="fs3">{Data?.rating}&#9733;</td>
                        </tr>
                        <tr>
                            <th>Sold By</th>
                            <td className="fs3">{Data?.soldBy}</td>
                        </tr>
                        <tr>
                            <th>Specification</th>
                            <td className="fs3">
                                <ul>
                                    {Data?.specs.map((ele, i) => {
                                        return <li key={i}>{ele}</li>;
                                    })}
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th>Reviews</th>
                            <td>
                                {Data?.reviews.map((ele) => {
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
