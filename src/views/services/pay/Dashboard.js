import Header from "../../../components/Header";
const Dashboard = () => {
    return (
        <div className="DashboardPay">
            <Header
                props={{
                    title: "LeoPay",
                    color: "error",
                    type: "Pay",
                }}
            />
        </div>
    );
};
export default Dashboard;
