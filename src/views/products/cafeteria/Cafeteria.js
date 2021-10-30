import Header from "../../../components/Header";
const Cafeteria = () => {
    return (
        <div className="Cafeteria">
            <Header
                props={{
                    title: "LeoCafeteria",
                    color: "error",
                    type: "Cafeteria",
                }}
            />
        </div>
    );
};
export default Cafeteria;
