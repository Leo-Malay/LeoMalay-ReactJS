import Header from "../../components/Header";
import Footer from "../../components/Footer";
const BlogRead = () => {
    return (
        <div className="BlogRead">
            <Header
                props={{ title: "LeoBlog", color: "secondary", type: "Blog" }}
            />
            <Footer
                props={{ title: "LeoBlog", color: "secondary", type: "Blog" }}
            />
        </div>
    );
};

export default BlogRead;
