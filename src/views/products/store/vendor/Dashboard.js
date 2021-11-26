import StoreHeader from "../components/StoreHeader";
import { ProtectedRoute } from "../../../../Security";
const VendorDashboard = () => {
    return (
        <div className="vendorDashboard">
            <ProtectedRoute props={{ path: "/Store/Vendor/Dashboard" }} />
            <StoreHeader />
            <div className="InfoPanel Inline">
                <div className="InfoPanelCard error-nohover PendingOrder">
                    <p className="fs4 bold">Pending Order</p>
                    <p className="fs17 bold">27</p>
                </div>
                <div className="InfoPanelCard success-nohover EarningThisMonth">
                    <p className="fs4 bold">Earning</p>
                    <p className="fs17 bold">2,100</p>
                </div>
                <div className="InfoPanelCard primary-nohover Balance">
                    <p className="fs4 bold">Total Balance</p>
                    <p className="fs17 bold">27,000</p>
                </div>
            </div>
            <div className="AvailableStockPerProduct"></div>
        </div>
    );
};
export default VendorDashboard;
