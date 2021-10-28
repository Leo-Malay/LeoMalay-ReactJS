import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../css/views/Product.css";
import ProductData from "../../data/Store.json";
import image from "../../assets/iphone.jfif";
import { useParams } from "react-router";
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
                <p id="title">{Data?.name}</p>
                <img src={image} alt="Product" />
                <p id="description">{Data?.description}</p>
                <table border={0}>
                    <tbody>
                        <tr>
                            <th>Price</th>
                            <td>${Data?.price}</td>
                        </tr>
                        <tr>
                            <th>Rating</th>
                            <td>{Data?.rating}&#9733;</td>
                        </tr>
                        <tr>
                            <th>Sold By</th>
                            <td>{Data?.soldBy}</td>
                        </tr>
                        <tr>
                            <th>Specification</th>
                            <td>
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
                                        <p key={ele?.review_id}>
                                            {ele.auth_id} : {ele.comment}
                                        </p>
                                    );
                                })}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer
                props={{ title: "LeoStore", color: "success", type: "Store" }}
            />
        </div>
    );
};

export default Product;
