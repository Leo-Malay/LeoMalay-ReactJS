import Header from "../../../components/Header";
const BlogWrite = () => {
    const submitHandler = (e) => {
        e.preventDefault();
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
                    required
                    style={{ width: "80%" }}
                />
                <br />
                <br />
                <textarea
                    rows={20}
                    placeholder="Start Typing Here..."
                    style={{ width: "80%", padding: 10, borderRadius: 5 }}
                />
                <input
                    type="submit"
                    name="Submit"
                    className="success"
                    style={{ width: "40%" }}
                />
            </form>
        </div>
    );
};

export default BlogWrite;
