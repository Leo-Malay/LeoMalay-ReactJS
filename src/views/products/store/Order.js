import Header from "../../../components/Header";
import "./css/Order.css";
import OrderData from "../../../data/StoreOrder.json";
import OrderCard from "./components/OrderCard";
const Order = () => {
    const getPendingOrder = () => {
        return OrderData.filter((OrderData) => {
            return (
                OrderData.isDelivered === false &&
                OrderData.isCancelled === false
            );
        });
    };
    const getPreviousOrder = () => {
        return OrderData.filter((OrderData) => {
            return (
                OrderData.isCancelled === true || OrderData.isDelivered === true
            );
        });
    };
    const pendingOrder = getPendingOrder();
    const previousOrder = getPreviousOrder();
    return (
        <div className="Order">
            <Header
                props={{ title: "LeoStore", color: "success", type: "Store" }}
            />
            <div className="section AlignCenter" id="current-orders">
                <p className="fs12 bold" id="Ordertitle">
                    Orders
                </p>
                <div className="OrderContainer">
                    {pendingOrder.map((ele) => {
                        return <OrderCard ele={ele} />;
                    })}
                </div>
            </div>
            <div className="section AlignCenter" id="previous-orders">
                <p className="fs12 bold" id="Ordertitle">
                    Previous Orders
                </p>
                <div className="OrderContainer">
                    {previousOrder.map((ele) => {
                        return <OrderCard ele={ele} />;
                    })}
                </div>
            </div>
        </div>
    );
};
export default Order;
