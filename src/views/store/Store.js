import Header from "../../components/Header";
import Footer from "../../components/Footer";
const Store = () => {
    return (
        <div className="Store">
            <Header props={{ title: "LeoStore", color: "success" }} />
            <Footer props={{ title: "LeoStore", color: "success" }} />
        </div>
    );
};

export default Store;
