import Header from "../../../components/Header";
import "./css/BlogRead.css";
import image from "../../../assets/iphone.jfif";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Store from "../../../Store";
import { Home } from "./redux/blogActions";
const BlogRead = () => {
    const { id } = useParams();
    const BlogData = useSelector((state) => state.blog.data);
    const getBlog = (id) => {
        if (BlogData === undefined) return [{}];
        return BlogData.filter(function (BlogData) {
            return BlogData._id === id;
        });
    };
    useEffect(() => {
        if (BlogData === undefined) Store.dispatch(Home());
    }, [BlogData]);
    const Data = getBlog(id)[0];
    return (
        <div className="BlogRead">
            <Header
                props={{ title: "LeoBlog", color: "secondary", type: "Blog" }}
            />
            <div className="BlogRead-section">
                <img src={image} alt="Blog" />
                <p className="fs17 bold" id="title">
                    {Data?.title ||
                        "A simple cheezy way to say good bye to anyone!"}
                </p>
                <div className="Inline" id="subCard">
                    <p className="fs3 bold" id="author">
                        By {Data?.author || "Anonymous"}
                    </p>
                    <p className="fs3 bold" id="date">
                        {new Date(Data?.date).toLocaleDateString() ||
                            "27-Oct-2021"}
                    </p>
                </div>
                <p className="fs4" id="description">
                    {Data?.description?.split("#newPara$").map((ele, i) => {
                        return (
                            <p className="AlignJustify fs4 preview" key={i}>
                                {ele}
                                <br />
                                <br />
                            </p>
                        );
                    })}
                </p>
            </div>
        </div>
    );
};

export default BlogRead;
