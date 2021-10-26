import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../css/views/Cart.css";
import { LinkButton } from "../../components/Element";
const Cart = () => {
    return (
        <div className="Cart">
            <Header
                props={{ title: "LeoStore", color: "success", type: "Store" }}
            />
            <div className="Cart-Container">
                <div className="Left">
                    <p id="title">Cart</p>
                </div>
                <div className="Right">
                    <LinkButton
                        props={{
                            value: "LeoStore",
                            color: "success",
                            to: "/Store/Cart",
                        }}
                    />
                </div>
            </div>
            <Footer
                props={{ title: "LeoStore", color: "success", type: "Store" }}
            />
        </div>
    );
};

export default Cart;
