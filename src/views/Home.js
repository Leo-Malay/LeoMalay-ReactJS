import Header from "../components/Header";
import "../css/Home.css";
const Home = () => {
    return (
        <div className="HomeIndex">
            <Header props={{ title: "LeoMalay", type: "Home" }} />
            <div className="sec1">
                <p className="AlignCenter title bold">LeoMalay</p>
                <p className="AlignCenter fs15 bold">Malay Bhavsar</p>
            </div>
            <div className="sec2">
                <p className="AlignCenter title bold">What</p>
                <p className="AlignJustify fs10 bold">
                    Hello World. I have made this website after observing the
                    world connecting too rapidly but still having some diversity
                    in the range of services offered by the companies. So to
                    cope up with the fast changing world, I hereby like you to
                    introduce to LeoMalay which is a compliation of all the
                    services offered over the internet. From Shopping to Paying,
                    From SocialMedia to Cafeteria, From Yesterday to Tomorrow. I
                    plan on developing all the services from scratch.
                </p>
            </div>
            <div className="sec3">
                <p className="AlignCenter title bold">Why</p>
                <p className="AlignJustify fs10 bold">
                    I am developing all of this services, as I will be able to
                    learn how to manage such a large project and will be able to
                    learn many differet things. I am using ReactJS for the
                    Front-End and ExpressJS along with MongoDB as a database for
                    the BackEnd. Am Also Palnning on developing all the mobile
                    apps for the services and products available on the website.
                </p>
            </div>
            <div className="sec4">
                <p className="AlignLeft fs17 bold">
                    Wanna See My Other Projects?
                </p>
                <p className="AlignLeft fs6 bold">Head over to my GitHub.</p>
                <div className="AlignLeft">
                    <br />
                    <a
                        className="IndexButton primary"
                        href="https://github.com/Leo-Malay"
                    >
                        GitHub
                    </a>
                    <br />
                </div>
                <br />
                <br />
                <p className="AlignRight fs17 bold">Wanna Hire Me?</p>
                <p className="AlignRight fs6 bold">
                    Send me a mail, I would be very happy to work
                    <br /> with you/your company
                </p>
                <div className="AlignRight">
                    <br />
                    <a
                        className="IndexButton primary"
                        href="mailto:malaybhavsar.290@gmail.com"
                    >
                        Mail
                    </a>
                    <br />
                </div>
                <br />
                <br />
                <p className="AlignLeft fs17 bold">Want Help?</p>
                <p className="AlignLeft fs6 bold">
                    I am always ready to help. you can contact me
                    <br /> via Mail, LinkedIn, Instagram
                </p>
                <div className="AlignLeft">
                    <br />
                    <a
                        className="IndexButton primary"
                        href="mailto:malaybhavsar.290@gmail.com"
                    >
                        Mail
                    </a>
                    <a
                        className="IndexButton primary"
                        href="https://www.linkedin.com/in/leo-malay-bhavsar/"
                    >
                        LinkedIn
                    </a>
                    <a
                        className="IndexButton primary"
                        href="https://www.instagram.com/leo_malay.29/"
                    >
                        Instagram
                    </a>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default Home;
