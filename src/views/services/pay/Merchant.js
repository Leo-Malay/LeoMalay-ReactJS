import Header from "../../../components/Header";
const Merchant = () => {
    return (
        <div className="MerchantPay">
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
export default Merchant;
