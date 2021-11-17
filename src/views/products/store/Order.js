import StoreHeader from "./components/StoreHeader";
import "./css/Order.css";
import OrderData from "../../../data/StoreOrder.json";
import OrderCard from "./components/OrderCard";
import { ProtectedRoute } from "../../../Security";
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
            <ProtectedRoute props={{ path: "/Store/Order" }} />
            <StoreHeader />
            <div className="section AlignCenter" id="current-orders">
                <p className="fs12 bold" id="Ordertitle">
                    Orders
                </p>
                <div className="OrderContainer">
                    {pendingOrder.map((ele, i) => {
                        return <OrderCard key={i} ele={ele} />;
                    })}
                </div>
            </div>
            <div className="section AlignCenter" id="previous-orders">
                <p className="fs12 bold" id="Ordertitle">
                    Previous Orders
                </p>
                <div className="OrderContainer">
                    {previousOrder.map((ele, i) => {
                        return <OrderCard key={i} ele={ele} />;
                    })}
                </div>
            </div>
        </div>
    );
};
export default Order;
