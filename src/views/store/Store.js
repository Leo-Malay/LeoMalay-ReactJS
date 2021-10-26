import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
const Store = () => {
    return (
        <div className="Store">
            <Header
                props={{ title: "LeoStore", color: "success", type: "Store" }}
            />
            <div className="Center">
                <ProductCard props={{ id: 1 }} />
                <ProductCard props={{ id: 2 }} />
                <ProductCard props={{ id: 3 }} />
            </div>
            <Footer
                props={{ title: "LeoStore", color: "success", type: "Store" }}
            />
        </div>
    );
};

export default Store;
