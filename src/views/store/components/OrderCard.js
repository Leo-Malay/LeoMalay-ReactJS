import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { LinkButton } from "../../../components/Element";
import { CancelOrder, Order } from "../redux/storeAction";
import { FiPackage } from "react-icons/fi";
const OrderCard = ({ props }) => {
    const dispatch = useDispatch();
    const { err, suc } = useSelector((state) => state.store);
    const cancelHandler = async (e) => {
        e.preventDefault();
        await dispatch(CancelOrder(props?._id));
        await dispatch(Order());
    };
    useEffect(() => {
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
    }, [dispatch, err, suc]);
    return (
        <div className="OrderCard Inline">
            <FiPackage id="icon" />
            <div className="content">
                <p className="">OrderId</p>
                <p className=""></p>
                <p className=""></p>
                <p className=""></p>
                <p className=""></p>
            </div>
        </div>
    );
    /*
    return (
        <div className=" AlignLeft OrderCard" key={props?._id}>
            <table id="head">
                <thead>
                    <tr>
                        <th>OrderId</th>
                        <td>{props?._id}</td>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td>{props?.address}</td>
                    </tr>
                </thead>
            </table>

            <table id="body">
                <tbody>
                    <tr key={-1}>
                        <th id="col1">Name</th>
                        <th id="col2">Quantity</th>
                        <th id="col3">Cost</th>
                    </tr>
                    {props?.order.map((item) => {
                        return (
                            <tr key={item?.productId}>
                                <td id="col1">{item?.productName}</td>
                                <td id="col2">{item?.qty}</td>
                                <td id="col3">${item?.price}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <table id="foot">
                <tfoot>
                    <tr>
                        <th>Total Cost</th>
                        <td>${props?.totalCost}</td>
                    </tr>
                    <tr>
                        <th>PayId(Type)</th>
                        <td>{props?.payId + " (" + props?.payType + ")"}</td>
                    </tr>
                    <tr>
                        <th>PayDate</th>
                        <td>{props?.payDate}</td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>
                            {props?.outForDelivery && (
                                <LinkButton
                                    props={{
                                        value: "Out for Delivery",
                                        color: "secondary-nohover",
                                        to: "/Store/Order",
                                    }}
                                />
                            )}
                            {props?.pending && (
                                <LinkButton
                                    props={{
                                        value: "Pending",
                                        color: "primary-nohover",
                                        to: "/Store/Order",
                                    }}
                                />
                            )}
                            {props?.pending && (
                                <Link
                                    to="/Store/Order"
                                    onClick={cancelHandler}
                                    className="error-nohover"
                                    style={{ padding: 4 }}
                                >
                                    Cancel Order
                                </Link>
                            )}
                            {props?.isDelivered && (
                                <LinkButton
                                    props={{
                                        value: "Delivered",
                                        color: "success-nohover",
                                        to: "/Store/Order",
                                    }}
                                />
                            )}
                            {props?.isCancelled && (
                                <LinkButton
                                    props={{
                                        value: "Cancelled",
                                        color: "error-nohover",
                                        to: "/Store/Order",
                                    }}
                                />
                            )}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
    */
};
export default OrderCard;
