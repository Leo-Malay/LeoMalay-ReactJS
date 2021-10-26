import "../css/components/BlogCard.css";
import image from "../assets/iphone.jfif";
import { Link } from "react-router-dom";
const BlogCard = ({ props }) => {
    return (
        <div className="BlogCard">
            <Link to={"/Blog/BlogRead?id=" + props.id}>
                <img src={image} alt="Blog" />
                <p id="title">{props.title}</p>
                <div className="Inline" id="subCard">
                    <p id="author">By {props.author || "Anonymous"}</p>
                    <p id="date">{props.date}</p>
                </div>
            </Link>
        </div>
    );
};
export default BlogCard;
