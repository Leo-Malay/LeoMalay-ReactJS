import React from "react";
import SocialHeader from "./components/SocialHeader";
import SocialPost from "./components/Post";
const Home = () => {
    return (
        <div className="Home">
            <SocialHeader />
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
                <SocialPost
                    props={{
                        avatar: true,
                        id: 1,
                        fname: "Malay",
                        lname: "Bhavsar",
                        postImage: true,
                        postText: true,
                        postTextData: "Hello World",
                        comments: [],
                    }}
                />
                <SocialPost
                    props={{
                        avatar: true,
                        id: 2,
                        fname: "Malay",
                        lname: "Bhavsar",
                        postImage: false,
                        postText: true,
                        postTextData:
                            "Hello World, This is my very first post on LeoSocial which is developd by Malay Bhavsar and is the future of the earth.",
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
