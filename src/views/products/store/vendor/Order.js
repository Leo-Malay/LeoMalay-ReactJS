import Header from "../../../../components/Header";
const VendorOrder = () => {
    return (
        <div className="vendorOrder">
            <Header
                props={{ title: "LeoStore", color: "success", type: "Store" }}
            />
            <div className="PendingOrders"></div>
            <div className="PreviousOrder"></div>
        </div>
    );
};
export default VendorOrder;
