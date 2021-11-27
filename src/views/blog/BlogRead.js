import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import BlogHeader from "./components/BlogHeader";
import { Blog, Like } from "./redux/blogActions";
import "./css/BlogRead.css";
import image from "../../assets/iphone.jfif";
const BlogRead = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const BlogData = useSelector((state) => state.blog.blog);
    const userEmail = useSelector((state) => state.auth?.data?.email);
    const [like, setLike] = useState(false);
    const likeHandler = (e) => {
        e.preventDefault();
        dispatch(Like(like, id));
        dispatch(Blog(id));
    };
    useEffect(() => {
        if (BlogData === undefined) dispatch(Blog(id));
        if (BlogData?.like) {
            if (BlogData?.like.includes(userEmail)) setLike(true);
            else setLike(false);
        }
    }, [BlogData, userEmail, id, dispatch]);

    return (
        <div className="BlogRead">
            <BlogHeader />
            <div className="BlogRead-section">
                <img src={image} alt="Blog" />
                <p className="fs17 bold" id="title">
                    {BlogData?.title ||
                        "A simple cheezy way to say good bye to anyone!"}
                </p>
                <div className="Inline" id="subCard">
                    <p className="fs3 bold" id="author">
                        By {BlogData?.author || "Anonymous"}
                    </p>
                    <p className="fs3 bold" id="date">
                        {new Date(BlogData?.date).toLocaleDateString() ||
                            "27-Oct-2021"}
                    </p>
                </div>
                <div className="fs4" id="description">
                    {BlogData?.description?.split("#newPara$").map((ele, i) => {
                        return (
                            <p className="AlignJustify fs4 preview" key={i}>
                                {ele}
                                <br />
                                <br />
                            </p>
                        );
                    })}
                </div>
            </div>
            <div className="LikeContainer AlignCenter">
                <input
                    type="button"
                    value={like ? "Unlike" : "Like"}
                    className={
                        like ? "error-inv-nohover" : "success-inv-nohover"
                    }
                    style={{ backgroundColor: "#fff" }}
                    onClick={likeHandler}
                />
            </div>
        </div>
    );
};

export default BlogRead;
