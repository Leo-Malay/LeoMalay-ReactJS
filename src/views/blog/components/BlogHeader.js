import { useHistory } from "react-router";
import Header from "../../../components/Header";
const BlogHeader = () => {
    const history = useHistory();
    return (
        <Header
            props={{
                title: "LeoBlog",
                color: "secondary",
                type: "Blog",
                redirect: history.location.pathname,
            }}
        />
    );
};
export default BlogHeader;
