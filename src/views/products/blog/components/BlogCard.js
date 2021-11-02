import "../css/BlogCard.css";
import image from "../../../../assets/iphone.jfif";
import { Link } from "react-router-dom";
const BlogCard = ({ props }) => {
    return (
        <div className="BlogCard">
            <Link to={"/Blog/BlogRead/" + props.id}>
                <img src={image} alt="Blog" />
                <p className="fs5 bold" id="title">
                    {props.title}
                </p>
                <div className="Inline" id="subCard">
                    <p className="fs2 bold" id="author">
                        By {props.author || "Anonymous"}
                    </p>
                    <p className="fs2 bold" id="date">
                        {props.date}
                    </p>
                </div>
            </Link>
        </div>
    );
};
export default BlogCard;
