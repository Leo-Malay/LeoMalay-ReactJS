import Header from "../../../components/Header";
const Client = () => {
    return (
        <div className="ClientPay">
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
export default Client;
