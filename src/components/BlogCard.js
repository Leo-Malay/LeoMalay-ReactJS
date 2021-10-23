import "../css/components/BlogCard.css";
import image from "../assets/iphone.jfif";
const BlogCard = ({ props }) => {
    return (
        <div className="BlogCard">
            <img src={image} alt="Blog" />
            <p id="title">{props.title}</p>
            <div className="Inline" id="subCard">
                <p id="author">By {props.author || "Anonymous"}</p>
                <p id="date">{props.date}</p>
            </div>
        </div>
    );
};
export default BlogCard;
