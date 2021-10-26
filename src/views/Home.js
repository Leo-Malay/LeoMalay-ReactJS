import Header from "../components/Header";
import Footer from "../components/Footer";
import { LinkButton } from "../components/Element";
const Home = () => {
    return (
        <div className="Home">
            <Header props={{ title: "LeoMalay", type: "Home" }} />
            <LinkButton
                props={{
                    color: "success",
                    value: "Go to Heaven",
                    to: "/Auth/Login",
                }}
            />
            <Footer props={{ title: "LeoMalay", type: "Home" }} />
        </div>
    );
};

export default Home;
