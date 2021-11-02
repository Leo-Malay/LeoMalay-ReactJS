import Header from "../../components/Header";
import HomeListElement from "../../components/HomeListElement";
import "../../css/Home.css";
const ProductHome = () => {
    return (
        <div className="ProductHome">
            <Header
                props={{
                    title: "LeoProduct",
                    color: "primary",
                    type: "Product",
                }}
            />
            <div className="ListElementContainer Center Inline">
                <HomeListElement
                    props={{
                        value: "LeoAuth",
                        color: "error-nohover",
                        desc: "Authentication for all our services and product",
                        to: "/Auth",
                    }}
                />
                <HomeListElement
                    props={{
                        value: "LeoBlog",
                        color: "secondary-nohover",
                        desc: "Knowledge is Power they say",
                        to: "/Blog",
                    }}
                />
                <HomeListElement
                    props={{
                        value: "LeoCafeteria",
                        color: "error-nohover",
                        desc: "Wanna grab something to eat?",
                        to: "/Cafeteria",
                    }}
                />
                <HomeListElement
                    props={{
                        value: "LeoSocial",
                        color: "primary-nohover",
                        desc: "Lets get Social",
                        to: "/Social",
                    }}
                />
                <HomeListElement
                    props={{
                        value: "LeoStore",
                        color: "success-nohover",
                        desc: "One stop Shop",
                        to: "/Store",
                    }}
                />
            </div>
        </div>
    );
};

export default ProductHome;
