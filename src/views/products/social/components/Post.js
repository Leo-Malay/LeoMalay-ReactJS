import { Link } from "react-router-dom";
import imagePost from "../../../../assets/iphone.jfif";
import "../css/Post.css";
const SocialPost = ({ props }) => {
    return (
        <div className="SocialPost">
            <div className="head AlignLeft">
                <img
                    className="avatar"
                    src={props.avatar && imagePost}
                    alt="Profile Pic"
                />
                <Link className="name bold" to={"/Profile/" + props.id}>
                    {props.fname + " " + props.lname}
                </Link>
            </div>
            <div className="body">
                {props.postImage && (
                    <img src={props.postImage && imagePost} alt="Post Pic" />
                )}
                {props.postText && <p>{props.postTextData}</p>}
            </div>
            <div className="foot">
                <div className="ButtonContainer">
                    <button className="fs3 bold">Like</button>
                    <button className="fs3 bold">Comment</button>
                    <button className="fs3 bold">Share</button>
                </div>
                <div className="LikeContainer">
                    <p className="fs2 AlignLeft bold">Liked by 29M People</p>
                </div>
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
