import { LinkButton } from "../../../../components/Element";
const OrderCard = ({ ele }) => {
    return (
        <div className=" AlignLeft OrderDetails" key={ele.id}>
            <table>
                <tr>
                    <th style={{ width: "20%" }}>OrderId</th>
                    <td style={{ width: "80%" }}>{ele.id}</td>
                </tr>
                <tr>
                    <th style={{ width: "20%" }}>Address</th>
                    <td style={{ width: "80%" }}>{ele.address}</td>
                </tr>
            </table>
            <hr />
            <table>
                <tr>
                    <th style={{ width: "60%" }}>Name</th>
                    <th style={{ width: "20%" }}>Quantity</th>
                    <th style={{ width: "20%" }}>Cost</th>
                </tr>
                {ele.items.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td style={{ width: "60%" }}>{item.name}</td>
                            <td style={{ width: "20%" }}>{item.quantity}</td>
                            <td style={{ width: "20%" }}>{item.cost}</td>
                        </tr>
                    );
                })}
            </table>
            <hr />
            <table>
                <tr>
                    <th style={{ width: "30%" }}>Total Cost</th>
                    <td style={{ width: "70%" }}>{ele.totalCost}</td>
                </tr>
                <tr>
                    <th style={{ width: "30%" }}>PayId(Type)</th>
                    <td style={{ width: "70%" }}>
                        {ele.payRefId + " (" + ele.payType + ")"}
                    </td>
                </tr>
                <tr>
                    <th style={{ width: "30%" }}>PayDate</th>
                    <td style={{ width: "70%" }}>{ele.payDate}</td>
                </tr>
                <tr>
                    <th style={{ width: "30%" }}>Status</th>
                    <td style={{ width: "70%" }}>
                        {ele.outForDelivery && (
                            <LinkButton
                                props={{
                                    value: "Out for Delivery",
                                    color: "secondary-nohover",
                                    to: "/Store/Order",
                                }}
                            />
                        )}
                        {ele.pending && (
                            <LinkButton
                                props={{
                                    value: "Pending",
                                    color: "primary-nohover",
                                    to: "/Store/Order",
                                }}
                            />
                        )}
                        {ele.isDelivered && (
                            <LinkButton
                                props={{
                                    value: "Delivered",
                                    color: "success-nohover",
                                    to: "/Store/Order",
                                }}
                            />
                        )}
                        {ele.isCancelled && (
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
            </table>
        </div>
    );
};
export default OrderCard;
