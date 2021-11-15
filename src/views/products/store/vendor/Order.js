import StoreHeader from "../components/StoreHeader";
const VendorOrder = () => {
    return (
        <div className="vendorOrder">
            <StoreHeader />
            <div className="PendingOrders"></div>
            <div className="PreviousOrder"></div>
        </div>
    );
};
export default VendorOrder;
