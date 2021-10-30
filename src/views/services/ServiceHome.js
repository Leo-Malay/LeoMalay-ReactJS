import Header from "../../components/Header";
const ServiceHome = () => {
    return (
        <div className="ServiceHome">
            <Header
                props={{
                    title: "LeoService",
                    color: "primary",
                    type: "Service",
                }}
            />
        </div>
    );
};

export default ServiceHome;
