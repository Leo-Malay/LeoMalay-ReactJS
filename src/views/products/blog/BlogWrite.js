import { useState } from "react";
import Header from "../../../components/Header";
const BlogWrite = () => {
    const [title, setTitle] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        const data = { title, thumbnail, author, category, description };
        console.log(data);
    };
    return (
        <div className="BlogWrite">
            <Header
                props={{ title: "LeoBlog", color: "secondary", type: "Blog" }}
            />
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
                    required
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
                    <option value="" disabled selected>
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
                    <p className="AlignJustify fs4 preview">
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
