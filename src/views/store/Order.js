import StoreHeader from "./components/StoreHeader";
import OrderCard from "./components/OrderCard";
import { ProtectedRoute } from "../../Security";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Order as orderAction } from "./redux/storeAction";
const Order = () => {
    const dispatch = useDispatch();
    const { order, trial } = useSelector((state) => state.store);
    const getPendingOrder = () => {
        if (order)
            return order.filter((o) => {
                return o.isDelivered === false && o.isCancelled === false;
            });
    };
    const getPreviousOrder = () => {
        if (order)
            return order.filter((o) => {
                return o.isCancelled === true || o.isDelivered === true;
            });
    };
    const pendingOrder = getPendingOrder();
    const previousOrder = getPreviousOrder();
    useEffect(() => {
        if (!order && trial < 2) {
            dispatch(orderAction());
            dispatch({ type: "STORE_INC_TRIAL" });
        }
    }, [dispatch, order, trial]);
    return (
        <div className="Order">
            <ProtectedRoute props={{ path: "/Store/Order" }} />
            <StoreHeader />
            {(!order || order.length === 0) && (
                <div className="AlignCenter fs17 bold">
                    <br />
                    <br />
                    Head over to Cart and Place an Order
                    <br />
                    <br />
                </div>
            )}
            {order && order.length > 0 && (
                <div className="AlignCenter" id="current-orders">
                    <p className="fs12 bold" id="Ordertitle">
                        Orders
                    </p>
                    <div className="OrderContainer">
                        {order &&
                            pendingOrder.map((ele, i) => {
                                return <OrderCard key={i} props={ele} />;
                            })}
                        <OrderCard
                            key={-1}
                            props={{
                                _id: "abbba",
                                address: "something sus",
                                order: [
                                    {
                                        productId: "abbbbba",
                                        productName: "Sus Among Us",
                                        qty: 12,
                                        price: 1234,
                                    },
                                    {
                                        productId: "abbbbba",
                                        productName: "Sus Among Us",
                                        qty: 12,
                                        price: 1234,
                                    },
                                ],
                            }}
                        />
                    </div>
                </div>
            )}
            {order && order.length > 0 && (
                <div className="AlignCenter" id="previous-orders">
                    <p className="fs12 bold" id="Ordertitle">
                        Previous Orders
                    </p>
                    <div className="OrderContainer">
                        {order &&
                            previousOrder.map((ele, i) => {
                                return <OrderCard key={i} props={ele} />;
                            })}
                    </div>
                </div>
            )}
        </div>
    );
};
export default Order;
