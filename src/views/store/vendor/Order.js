import StoreHeader from "../components/StoreHeader";
import { ProtectedRoute } from "../../../Security";
const VendorOrder = () => {
    return (
        <div className="vendorOrder">
            <ProtectedRoute props={{ path: "/Store/Vendor/Order" }} />
            <StoreHeader />
            <div className="PendingOrders"></div>
            <div className="PreviousOrder"></div>
        </div>
    );
};
export default VendorOrder;
