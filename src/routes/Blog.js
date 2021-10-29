import { Switch, Route } from "react-router-dom";
import Blog from "../views/blog/Blog";
import BlogRead from "../views/blog/BlogRead";
import BlogWrite from "../views/blog/BlogWrite";
const BlogRoute = () => {
    return (
        <Switch className="BlogRoute">
            <Route exact path="/Blog" component={Blog} />
            <Route exact path="/Blog/BlogRead/:id" component={BlogRead} />
            <Route exact path="/Blog/BlogWrite" component={BlogWrite} />
        </Switch>
    );
};

export default BlogRoute;
