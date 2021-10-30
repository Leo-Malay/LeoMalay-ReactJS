import Header from "../../../components/Header";
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
        </div>
    );
};
export default Stock;
