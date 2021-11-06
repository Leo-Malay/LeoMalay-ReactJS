import Header from "../../../components/Header";
import ProductCard from "./components/ProductCard";
import StoreData from "../../../data/Store.json";
const Store = () => {
    var dict = {};
    const getCategoryDict = (data) => {
        data.map((ele) => {
            try {
                return dict[ele.category].push(ele);
            } catch {
                return (dict[ele.category] = [ele]);
            }
        });
    };
    getCategoryDict(StoreData);
    return (
        <div className="Store">
            <Header
                props={{ title: "LeoStore", color: "success", type: "Store" }}
            />
            <div className="Center">
                {Object.keys(dict).map((ele, i) => {
                    return (
                        <div className="FilterHeading AlignCenter" key={i}>
                            <p className="category fs8 primary-nohover bold">
                                {ele}
                            </p>
                            <br />
                            {dict[ele].map((ele1, j) => {
                                return (
                                    <ProductCard
                                        key={j}
                                        props={{
                                            id: ele1.id,
                                            name: ele1.name,
                                            price: ele1.price,
                                            rating: ele1.rating,
                                        }}
                                    />
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Store;
