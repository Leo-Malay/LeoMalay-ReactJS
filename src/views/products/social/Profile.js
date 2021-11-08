import { useParams } from "react-router";
import SocialPost from "./components/Post";
import Header from "../../../components/Header";
import "./css/Profile.css";
import image from "../../../assets/iphone.jfif";
const Profile = () => {
    const { id } = useParams();
    console.log("Viewing Profile having id", id);
    return (
        <div className="Profile">
            <Header
                props={{
                    title: "LeoSocial",
                    color: "primary",
                    type: "Social",
                }}
            />
            <center>
                <div className="desc">
                    <img src={image} alt="Profile Pic" className="avatar" />
                    <p className="name fs14 bold">Malay Bhavsar</p>
                    <br />
                    <div className="Inline">
                        <div className="box post">
                            <p className="fs4 bold">Posts</p>
                            <p className="fs8 bold">23</p>
                        </div>
                        <div className="box follower">
                            <p className="fs4 bold">Followers</p>
                            <p className="fs8 bold">23</p>
                        </div>
                        <div className="box following">
                            <p className="fs4 bold">Following</p>
                            <p className="fs8 bold">23</p>
                        </div>
                    </div>
                </div>
                <br />
                <div className="buttonContainer">
                    <button className="bold fs3 primary-nohover">Follow</button>
                    <button className="bold fs3 primary-nohover">
                        Message
                    </button>
                </div>
            </center>

            <div className="body">
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
export default Profile;
