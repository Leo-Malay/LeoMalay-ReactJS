import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogCard from "../../components/BlogCard";
import "../../css/views/Blog.css";
const Blog = () => {
    return (
        <div className="Blog">
            <Header
                props={{ title: "LeoBlog", color: "secondary", type: "Blog" }}
            />
            <div className="BlogContainer">
                <p id="ContainerTitle">Algorithms</p>
                <BlogCard
                    props={{
                        id: 1,
                        title: "Bubble Sort Algorithm",
                        author: "Malay Bhavsar",
                        date: "23-Oct-2021",
                    }}
                />
                <BlogCard
                    props={{
                        id: 2,
                        title: "Insertion Sort Algorithm",
                        author: "Malay Bhavsar",
                        date: "23-Oct-2021",
                    }}
                />
                <BlogCard
                    props={{
                        id: 3,
                        title: "Quick Sort Algorithm",
                        author: "Malay Bhavsar",
                        date: "23-Oct-2021",
                    }}
                />
                <BlogCard
                    props={{
                        id: 4,
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
                        id: 5,
                        title: "Python",
                        author: "Malay Bhavsar",
                        date: "23-Oct-2021",
                    }}
                />
                <BlogCard
                    props={{
                        id: 6,
                        title: "Javascript",
                        author: "Malay Bhavsar",
                        date: "23-Oct-2021",
                    }}
                />
                <BlogCard
                    props={{
                        id: 7,
                        title: "Java",
                        author: "Malay Bhavsar",
                        date: "23-Oct-2021",
                    }}
                />
                <BlogCard
                    props={{
                        id: 8,
                        title: "Scala",
                        author: "Malay Bhavsar",
                        date: "23-Oct-2021",
                    }}
                />
            </div>
            <Footer
                props={{ title: "LeoBlog", color: "secondary", type: "Blog" }}
            />
        </div>
    );
};

export default Blog;
