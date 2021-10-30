import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import BlogCard from "../../../components/BlogCard";
import "../../../css/views/products/Blog.css";
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
            <Footer
                props={{ title: "LeoBlog", color: "secondary", type: "Blog" }}
            />
        </div>
    );
};

export default Blog;
