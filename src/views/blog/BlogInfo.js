import Header from "../../components/Header";
import Footer from "../../components/Footer";
const BlogInfo = () => {
    return (
        <div className="BlogInfo">
            <Header props={{ title: "LeoBlog", color: "secondary" }} />
            <Footer props={{ title: "LeoBlog", color: "secondary" }} />
        </div>
    );
};

export default BlogInfo;
