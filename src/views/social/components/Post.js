import React, { useState } from "react";
import { Link } from "react-router-dom";
import imagePost from "../../../assets/iphone.jfif";
import "../css/Post.css";
const SocialPost = ({ props }) => {
    const [newComment, setNewComment] = useState("");
    const [showCommentInput, setShowCommentInput] = useState(false);
    const likeHandler = (e) => {
        e.preventDefault();
        console.log("Liked the Post");
    };
    const commentHandler = (e) => {
        e.preventDefault();
        setShowCommentInput(!showCommentInput);
    };
    const shareHandler = (e) => {
        e.preventDefault();
        console.log("Shared the Post");
    };
    const addCommentHandler = (e) => {
        props.comments.push({
            fname: "Malay",
            lname: "Bhavsar",
            body: newComment,
        });
        setNewComment("");
        setShowCommentInput(false);
        console.log("Added new Comment to the Post");
    };
    return (
        <div className="SocialPost">
            <div className="head AlignLeft">
                <img
                    className="avatar"
                    src={props.avatar && imagePost}
                    alt="Profile Pic"
                />
                <Link className="name bold" to={"Social/Profile/" + props.id}>
                    {props.fname + " " + props.lname}
                </Link>
            </div>
            <div className="body">
                {props.postImage && (
                    <img src={props.postImage && imagePost} alt="Post Pic" />
                )}
                {props.postText && (
                    <p className="fs4 text AlignJustify">
                        {props.postTextData}
                    </p>
                )}
            </div>
            <div className="foot">
                <div className="ButtonContainer">
                    <button className="fs3 bold" onClick={likeHandler}>
                        Like
                    </button>
                    <button className="fs3 bold" onClick={commentHandler}>
                        Comment
                    </button>
                    <button className="fs3 bold" onClick={shareHandler}>
                        Share
                    </button>
                </div>
                <div className="LikeContainer">
                    <p className="fs2 AlignLeft bold">Liked by 29M People</p>
                </div>
                {showCommentInput && (
                    <div className="NewCommentContainer">
                        <input
                            type="text"
                            placeholder="Write Comment Here..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                        <input
                            type="submit"
                            value="Add"
                            className="success-nohover"
                            onClick={addCommentHandler}
                        />
                    </div>
                )}
                <div className="CommentContainer AlignCenter">
                    {props.comments.map((ele, i) => {
                        return (
                            <div className="Comment AlignLeft" key={i}>
                                <p className="fs3 bold name">
                                    {ele.fname + " " + ele.lname}
                                </p>
                                <p className="fs2">{ele.body}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
export default SocialPost;
