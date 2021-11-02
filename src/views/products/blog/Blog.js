import Header from "../../../components/Header";
import BlogCard from "./components/BlogCard";
import "./css/Blog.css";
import BlogData from "../../../data/Blog.json";
const Blog = () => {
    return (
        <div className="Blog">
            <Header
                props={{ title: "LeoBlog", color: "secondary", type: "Blog" }}
            />
            <div className="BlogContainer">
                {BlogData.map((ele, i) => {
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
