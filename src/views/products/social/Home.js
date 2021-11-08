import Header from "../../../components/Header";
import SocialPost from "./components/Post";
const Home = () => {
    return (
        <div className="Home">
            <Header
                props={{
                    title: "LeoSocial",
                    color: "primary",
                    type: "Social",
                }}
            />
            <div className="SocialPostContainer AlignCenter">
                <SocialPost
                    props={{
                        avatar: true,
                        id: 1,
                        fname: "Malay",
                        lname: "Bhavsar",
                        postImage: true,
                        postText: true,
                        postTextData: "Hello World",
                        comments: [
                            {
                                fname: "Harry",
                                lname: "Potter",
                                body: "Nice Pic",
                            },
                            {
                                fname: "John",
                                lname: "Wick",
                                body: "Wanna be in my movie?",
                            },
                        ],
                    }}
                />
            </div>
        </div>
    );
};
export default Home;
