import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
const Dashboard = () => {
    return (
        <div className="Dashboard">
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
export default Dashboard;
