import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BlogHeader from "./components/BlogHeader";
import BlogCard from "./components/BlogCard";
import { Home } from "./redux/blogActions";
import "./css/Blog.css";
const Blog = () => {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState("");
    const BlogData = useSelector((state) => state.blog.data);
    useEffect(() => {
        if (BlogData === undefined) dispatch(Home());
    }, [BlogData, dispatch]);
    const renderData = () => {
        if (BlogData === undefined) return [];
        if (filter === "") return BlogData;
        return BlogData.filter((BlogData) => {
            return BlogData.category.toUpperCase() === filter;
        });
    };
    return (
        <div className="Blog">
            <BlogHeader />
            <div className="CategoryContainer AlignCenter">
                <p className="category fs3 primary-nohover">
                    Filter by Catergory
                </p>
                {["Technology", "FrameWork", "Algorithm", "UI/UX", "DIY"].map(
                    (ele, i) => {
                        return (
                            <p
                                className="category fs3 secondary-nohover"
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
                                id: ele._id,
                                uid: ele.userId,
                                title: ele.title,
                                author: ele.author,
                                date: ele.date,
                                description: ele.description,
                                like: ele.like,
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Blog;
