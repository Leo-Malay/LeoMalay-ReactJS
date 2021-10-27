import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/views/Home.css";
import { LinkButton } from "../components/Element";
const Home = () => {
    return (
        <div className="Home">
            <Header props={{ title: "LeoMalay", type: "Home" }} />
            <div className="section" id="1">
                <p id="title">
                    HELLO WORLD
                    <br />
                    WELCOME TO LEOMALAY
                </p>
                <p id="desc">
                    My Primary Aim is to connect everything to a single source.
                    Just like the sun is the main source of our energy. I wanted
                    to develop a Sun for the people of this very own beautiful
                    earth.
                </p>
            </div>
            <div className="section" id="2">
                <p id="title">
                    LOOKING FOR A SHOP,
                    <br />
                    TO BUY YOUR DAILY NEEDS?
                </p>
                <p id="desc">
                    A one stop store, where you'll be able to buy all the basic
                    items required on day to day basis. And the good thing is it
                    will be delivered to you within one day! Also you can
                    subscribe to items to be delivered to you daily.
                </p>
                <LinkButton
                    props={{
                        value: "Visit Store",
                        color: "success",
                        to: "/Store",
                    }}
                />
            </div>
            <div className="section" id="3">
                <p id="title">
                    I'LL BET YOU'RE HUNGRY!
                    <br />
                    ORDER NOW :)
                </p>
                <p id="desc">
                    Hello Sir what would you like to order? We have Burgers,
                    Sandwich, Pizza, Tea {"&"} Coffee. Get it cooking right
                    away, just need to place an order.
                </p>
                <LinkButton
                    props={{
                        value: "Visit Cafeteria",
                        color: "error",
                        to: "/Cafeteria",
                    }}
                />
            </div>
            <div className="section" id="4">
                <p id="title">
                    KNOWLEDGE IS POWER!
                    <br />
                    WANNA READ AMAZING BLOGS?
                </p>
                <p id="desc">
                    I sure do agree with the saying that goes, "Pen is more
                    powerful than a sword". Thus keep reading and keep learning.
                    Success is achieved by those who are life long learners.
                </p>
                <LinkButton
                    props={{
                        value: "Visit Blogs",
                        color: "secondary",
                        to: "/Blog",
                    }}
                />
            </div>
            <Footer props={{ title: "LeoMalay", type: "Home" }} />
        </div>
    );
};

export default Home;
