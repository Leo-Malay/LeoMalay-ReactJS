import Header from "../../../components/Header";
const Order = () => {
    return (
        <div className="Order">
            <Header
                props={{ title: "LeoStore", color: "success", type: "Store" }}
            />
            <div classNae="section" id="current-orders"></div>
            <div classNae="section" id="previous-orders"></div>
        </div>
    );
};

export default Order;
