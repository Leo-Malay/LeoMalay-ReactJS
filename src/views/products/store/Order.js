import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
const Order = () => {
    return (
        <div className="Order">
            <Header
                props={{ title: "LeoStore", color: "success", type: "Store" }}
            />
            <div classNae="section" id="current-orders"></div>
            <div classNae="section" id="previous-orders"></div>
            <Footer
                props={{ title: "LeoStore", color: "success", type: "Store" }}
            />
        </div>
    );
};

export default Order;
