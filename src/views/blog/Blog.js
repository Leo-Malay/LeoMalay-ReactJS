import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogCard from "../../components/BlogCard";
import "../../css/views/Blog.css";
const Blog = () => {
    return (
        <div className="Blog">
            <Header props={{ title: "LeoBlog", color: "secondary" }} />
            <div className="BlogContainer">
                <p id="ContainerTitle">Algorithms</p>
                <BlogCard
                    props={{
                        title: "Bubble Sort Algorithm",
                        author: "Malay Bhavsar",
                        date: "23-Oct-2021",
                    }}
                />
                <BlogCard
                    props={{
                        title: "Insertion Sort Algorithm",
                        author: "Malay Bhavsar",
                        date: "23-Oct-2021",
                    }}
                />
                <BlogCard
                    props={{
                        title: "Quick Sort Algorithm",
                        author: "Malay Bhavsar",
                        date: "23-Oct-2021",
                    }}
                />
                <BlogCard
                    props={{
                        title: "Merge Sort Algorithm",
                        author: "Malay Bhavsar",
                        date: "23-Oct-2021",
                    }}
                />
            </div>
            <div className="BlogContainer">
                <p id="ContainerTitle">Languages</p>
                <BlogCard
                    props={{
                        title: "Python",
                        author: "Malay Bhavsar",
                        date: "23-Oct-2021",
                    }}
                />
                <BlogCard
                    props={{
                        title: "Javascript",
                        author: "Malay Bhavsar",
                        date: "23-Oct-2021",
                    }}
                />
                <BlogCard
                    props={{
                        title: "Java",
                        author: "Malay Bhavsar",
                        date: "23-Oct-2021",
                    }}
                />
                <BlogCard
                    props={{
                        title: "Scala",
                        author: "Malay Bhavsar",
                        date: "23-Oct-2021",
                    }}
                />
            </div>
            <Footer props={{ title: "LeoBlog", color: "secondary" }} />
        </div>
    );
};

export default Blog;
