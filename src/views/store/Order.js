import StoreHeader from "./components/StoreHeader";
import OrderCard from "./components/OrderCard";
import { ProtectedRoute } from "../../Security";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Order as orderAction } from "./redux/storeAction";
import { toast } from "react-toastify";
const Order = () => {
    const dispatch = useDispatch();
    const { order, suc, err, trial } = useSelector((state) => state.store);
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
        if (err !== undefined)
            toast.error(err, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        if (suc !== undefined)
            toast.success(suc, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        dispatch({ type: "STORE_ERRSUC_CLEAR" });
    }, [dispatch, order, suc, err, trial]);
    return (
        <div className="Order">
            {/* <ProtectedRoute props={{ path: "/Store/Order" }} /> */}
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
                <div className="section AlignCenter" id="current-orders">
                    <p className="fs12 bold" id="Ordertitle">
                        Orders
                    </p>
                    <div className="OrderContainer">
                        {order &&
                            pendingOrder.map((ele, i) => {
                                return <OrderCard key={i} props={ele} />;
                            })}
                    </div>
                </div>
            )}
            {order && order.length > 0 && (
                <div className="section AlignCenter" id="previous-orders">
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
