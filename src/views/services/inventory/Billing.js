import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
const Billing = () => {
    return (
        <div className="Billing">
            <Header
                props={{
                    title: "LeoInventory",
                    color: "primary",
                    type: "Inventory",
                }}
            />
            <Footer
                props={{
                    title: "LeoInventory",
                    color: "primary",
                    type: "Inventory",
                }}
            />
        </div>
    );
};
export default Billing;
