import Header from "../../components/Header";
import Footer from "../../components/Footer";
const Product = () => {
    return (
        <div className="Product">
            <Header props={{ title: "LeoStore", color: "success" }} />
            <Footer props={{ title: "LeoStore", color: "success" }} />
        </div>
    );
};

export default Product;
