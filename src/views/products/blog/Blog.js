import Header from "../../../components/Header";
import BlogCard from "./components/BlogCard";
import "./css/Blog.css";
import BlogData from "../../../data/Blog.json";
import { useState } from "react";
const Blog = () => {
    const [filter, setFilter] = useState("");
    const renderData = () => {
        if (filter === "") return BlogData;
        return BlogData.filter((BlogData) => {
            return BlogData.category === filter;
        });
    };
    return (
        <div className="Blog">
            <Header
                props={{ title: "LeoBlog", color: "secondary", type: "Blog" }}
            />
            <div className="CategoryContainer AlignCenter">
                <p className="category fs2 primary-nohover">
                    Filter by Catergory
                </p>
                {["Technology", "FrameWork", "Algorithm", "UI/UX"].map(
                    (ele, i) => {
                        return (
                            <p
                                className="category fs2 secondary-nohover"
                                key={i}
                                nodevalue={ele}
                                onClick={(e) =>
                                    setFilter(e.target.childNodes[0].data)
                                }
                            >
                                {ele.toUpperCase()}
                            </p>
                        );
                    }
                )}
                {filter !== "" && (
                    <p
                        className="category fs2 error-nohover"
                        onClick={(e) => setFilter("")}
                    >
                        Clear Filter
                    </p>
                )}
            </div>
            <div className="BlogContainer">
                {filter !== "" && (
                    <div className="FilterHeading AlignCenter">
                        <p className="category fs10 secondary-nohover bold">
                            {filter}
                        </p>
                    </div>
                )}
                <br />
                {renderData().map((ele, i) => {
                    return (
                        <BlogCard
                            key={i}
                            props={{
                                id: ele.id,
                                title: ele.title,
                                author: ele.author,
                                date: ele.date,
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Blog;
