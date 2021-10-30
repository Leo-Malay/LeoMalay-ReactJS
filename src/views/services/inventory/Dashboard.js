import Header from "../../../components/Header";
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
        </div>
    );
};
export default Dashboard;
