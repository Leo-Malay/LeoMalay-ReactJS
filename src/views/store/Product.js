import Header from "../../components/Header";
import Footer from "../../components/Footer";
const Product = () => {
    return (
        <div className="Product">
            <Header
                props={{ title: "LeoStore", color: "success", type: "Store" }}
            />
            <Footer
                props={{ title: "LeoStore", color: "success", type: "Store" }}
            />
        </div>
    );
};

export default Product;
