import Header from "../../../components/Header";
const Dashboard = () => {
    return (
        <div className="BlogDashboard">
            <Header
                props={{ title: "LeoBlog", color: "secondary", type: "Blog" }}
            />
        </div>
    );
};

export default Dashboard;
