import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import BlogHeader from "./components/BlogHeader";
import { Write } from "./redux/blogActions";
import { ProtectedRoute } from "../../Security";
const BlogWrite = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.auth.data);
    const [BlogSubmit, setBlogSubmit] = useState(false);
    const [title, setTitle] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(Write(thumbnail, title, category, author, description));
        setBlogSubmit(true);
    };
    useEffect(() => {
        if (data?.fname && data?.lname)
            setAuthor(data?.fname + " " + data?.lname);
    }, [data]);
    return (
        <div className="BlogWrite">
            <ProtectedRoute props={{ path: "/Blog/Write" }} />
            {BlogSubmit && <Redirect to="/Blog" />}
            <BlogHeader />
            <form
                action="#"
                method="POST"
                onSubmit={submitHandler}
                style={{ width: "80%" }}
            >
                <input
                    type="text"
                    name="title"
                    placeholder="Title of Blog"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    style={{ width: "80%" }}
                />
                <br />
                <input
                    type="url"
                    name="thumbnail"
                    value={thumbnail}
                    onChange={(e) => setThumbnail(e.target.value)}
                    placeholder="URL of Thumbnail Image"
                    style={{ width: "80%" }}
                />
                <br />
                <input
                    type="text"
                    name="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Name of Author"
                    required
                    style={{ width: "80%" }}
                />
                <select
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    style={{ width: "80%" }}
                >
                    <option value="" disabled key={-1}>
                        Choose an Category
                    </option>
                    {["Algorithm", "UI/UX", "Technology", "Frameworks"].map(
                        (ele, i) => {
                            return (
                                <option value={ele} key={i}>
                                    {ele}
                                </option>
                            );
                        }
                    )}
                </select>
                <br />
                <br />
                <textarea
                    rows={20}
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Start Typing Here... #newPara$ ---> For New Paragraph"
                    minLength={200}
                    required
                    style={{ width: "80%", padding: 10, borderRadius: 5 }}
                />
                <p className="fs2 bold">
                    Length: {description.replaceAll(" ", "").length}, Words:{" "}
                    {description.split(" ").length}
                </p>
                <br />
                <input
                    type="submit"
                    name="Submit"
                    className="success"
                    style={{ width: "40%" }}
                />
            </form>
            <br />
            <br />
            <p className="AlignCenter fs17 bold">Preview</p>
            <br />
            {description.split("#newPara$").map((ele, i) => {
                return (
                    <p className="AlignJustify fs4 preview" key={i}>
                        {ele}
                        <br />
                        <br />
                    </p>
                );
            })}
        </div>
    );
};

export default BlogWrite;
