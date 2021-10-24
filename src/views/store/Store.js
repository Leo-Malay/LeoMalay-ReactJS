import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
const Store = () => {
    return (
        <div className="Store">
            <Header props={{ title: "LeoStore", color: "success" }} />
            <div className="Center">
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <Footer props={{ title: "LeoStore", color: "success" }} />
        </div>
    );
};

export default Store;
