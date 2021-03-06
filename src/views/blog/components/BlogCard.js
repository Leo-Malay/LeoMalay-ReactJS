import "../css/BlogCard.css";
import React from "react";
import image from "../../../assets/iphone.jfif";
import { Link } from "react-router-dom";
const BlogCard = ({ props }) => {
    return (
        <div className="BlogCard">
            <Link to={"/Blog/Read/" + props.id}>
                <img src={image} alt="Blog" />
                <p className="fs8 bold" id="title">
                    {props.title}
                </p>
                <div className="Inline" id="subCard">
                    <p className="fs3 bold" id="author">
                        By {props.author || "Anonymous"}
                    </p>
                    <p className="fs3 bold" id="date">
                        {new Date(props.date).toLocaleDateString()}
                    </p>
                    <p className="fs3 bold" id="like">
                        {props.like.length}❤️
                    </p>
                </div>
            </Link>
        </div>
    );
};
export default BlogCard;
