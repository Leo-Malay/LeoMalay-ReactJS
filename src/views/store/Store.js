import StoreHeader from "./components/StoreHeader";
import ProductCard from "./components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Home } from "./redux/storeAction";
const Store = () => {
    const dispatch = useDispatch();
    const { home, trial } = useSelector((state) => state.store);
    var dict = {};
    const getCategoryDict = (data) => {
        if (data === undefined) return;
        data.map((ele) => {
            try {
                return dict[ele.category].push(ele);
            } catch {
                return (dict[ele.category] = [ele]);
            }
        });
    };
    getCategoryDict(home);
    useEffect(() => {
        if (home === undefined && trial < 2) {
            dispatch(Home());
            dispatch({ type: "STORE_INC_TRIAL" });
        }
    }, [dispatch, home, trial]);
    return (
        <div className="Store">
            <StoreHeader />
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
                                            id: ele1._id,
                                            name: ele1.name,
                                            price: ele1.price,
                                            rating: ele1.rating,
                                        }}
                                    />
                                );
                            })}
                            {dict[ele].map((ele1, j) => {
                                return (
                                    <ProductCard
                                        key={j}
                                        props={{
                                            id: ele1._id,
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
