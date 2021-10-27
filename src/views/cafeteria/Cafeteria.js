import Header from "../../components/Header";
import Footer from "../../components/Footer";
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
            <Footer
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
