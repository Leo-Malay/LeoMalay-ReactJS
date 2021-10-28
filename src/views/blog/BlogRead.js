import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../css/views/BlogRead.css";
import image from "../../assets/iphone.jfif";
import BlogData from "../../data/Blog.json";
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
                <p id="title">
                    {Data?.title ||
                        "A simple cheezy way to say good bye to anyone!"}
                </p>
                <div className="Inline" id="subCard">
                    <p id="author">By {Data?.author || "Anonymous"}</p>
                    <p id="date">{Data?.date || "27-Oct-2021"}</p>
                </div>
                <p id="description">{Data?.description}</p>
            </div>
            <Footer
                props={{ title: "LeoBlog", color: "secondary", type: "Blog" }}
            />
        </div>
    );
};

export default BlogRead;
