import Header from "../../../components/Header";
import "./css/BlogRead.css";
import image from "../../../assets/iphone.jfif";
import BlogData from "../../../data/Blog.json";
import { useParams } from "react-router";
const BlogRead = ({ props }) => {
    const { id } = useParams();
    const getBlog = (id) => {
        return BlogData.filter(function (BlogData) {
            return BlogData.id === id;
        });
    };
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
                        {Data?.date || "27-Oct-2021"}
                    </p>
                </div>
                <p className="fs4" id="description">
                    {Data?.description}
                </p>
            </div>
        </div>
    );
};

export default BlogRead;
