import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ProductCard from "../../../components/ProductCard";
import StoreData from "../../../data/Store.json";
const Store = () => {
    return (
        <div className="Store">
            <Header
                props={{ title: "LeoStore", color: "success", type: "Store" }}
            />
            <div className="Center">
                {StoreData.map((ele, i) => {
                    return (
                        <ProductCard
                            key={i}
                            props={{
                                id: ele.id,
                                name: ele.name,
                                price: ele.price,
                                rating: ele.rating,
                            }}
                        />
                    );
                })}
            </div>
            <Footer
                props={{ title: "LeoStore", color: "success", type: "Store" }}
            />
        </div>
    );
};

export default Store;
