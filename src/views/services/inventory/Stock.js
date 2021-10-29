import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
const Stock = () => {
    return (
        <div className="Stock">
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
export default Stock;
